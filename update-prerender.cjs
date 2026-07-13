const fs = require('fs');

const productsTs = fs.readFileSync('src/lib/products.ts', 'utf-8');

const routes = [
  '/',
  '/about',
  '/products',
  '/contact',
  '/export-inquiries',
];

// Extract categories
const catRegex = /slug:\s*"([^"]+)"/g;
let match;
const categories = [];
while ((match = catRegex.exec(productsTs)) !== null) {
  categories.push(match[1]);
}
// Note: this will also match some other things if they have slug: "..." but in products.ts Categories is an array of objects with slug: "..."
// Actually let's just parse the P(...) calls.
const pRegex = /P\(\s*"([^"]+)"\s*,\s*"[^"]+"\s*,\s*"([^"]+)"/g;
while ((match = pRegex.exec(productsTs)) !== null) {
  const slug = match[1];
  const category = match[2];
  if (!routes.includes(`/products/${category}`)) {
    routes.push(`/products/${category}`);
  }
  routes.push(`/product/${slug}`);
}

// Generate prerender.mjs
const prerenderCode = `import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const routes = ${JSON.stringify(routes, null, 2)};

async function prerender() {
  console.log('Starting server for prerendering...');
  const server = spawn('node', ['dist/server/index.mjs'], { stdio: 'inherit' });
  
  // Wait a moment for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  for (const route of routes) {
    try {
      console.log(\`Fetching \${route}...\`);
      const res = await fetch(\`http://localhost:3000\${route}\`);
      const html = await res.text();
      
      let filePath = path.join(process.cwd(), 'dist', 'public', route);
      if (route === '/') {
        filePath = path.join(filePath, 'index.html');
      } else {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        filePath = path.join(filePath, 'index.html');
      }
      
      fs.writeFileSync(filePath, html);
      console.log(\`Saved \${filePath}\`);
    } catch (e) {
      console.error(\`Failed to prerender \${route}:\`, e);
    }
  }
  
  console.log('Done prerendering. Stopping server...');
  server.kill();
}

prerender();
`;

fs.writeFileSync('prerender.mjs', prerenderCode);
console.log('prerender.mjs updated with ' + routes.length + ' routes.');

// Generate sitemap.xml
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const r of routes) {
  let priority = "0.8";
  let changefreq = "weekly";
  if (r === "/") priority = "1.0";
  if (r === "/about" || r === "/export-inquiries" || r === "/contact") changefreq = "monthly";
  if (r === "/products") priority = "0.9";
  if (r.startsWith("/product/")) {
    priority = "0.7";
    changefreq = "monthly";
  }

  sitemap += `  <url>
    <loc>https://elfuratspices.com${r === '/' ? '' : r}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

sitemap += `</urlset>\n`;
fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('public/sitemap.xml updated.');
