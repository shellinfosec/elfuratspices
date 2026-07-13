import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const routes = [
  '/',
  '/about',
  '/products',
  '/contact',
  '/export-inquiries',
  '/products/whole-spices',
  '/products/ground-spices',
  '/products/masala-blends',
  '/products/aromatics',
  '/products/nuts',
  '/products/dried-fruits-seeds',
  '/products/makhana',
  '/products/dairy-staples'
];

async function prerender() {
  console.log('Starting server for prerendering...');
  const server = spawn('node', ['dist/server/index.mjs'], { stdio: 'inherit' });
  
  // Wait a moment for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  for (const route of routes) {
    try {
      console.log(`Fetching ${route}...`);
      const res = await fetch(`http://localhost:3000${route}`);
      const html = await res.text();
      
      let filePath = path.join(process.cwd(), 'dist', 'public', route);
      if (route === '/') {
        filePath = path.join(filePath, 'index.html');
      } else {
        // Create directory if it doesn't exist
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        filePath = path.join(filePath, 'index.html');
      }
      
      fs.writeFileSync(filePath, html);
      console.log(`Saved ${filePath}`);
    } catch (e) {
      console.error(`Failed to prerender ${route}:`, e);
    }
  }
  
  console.log('Done prerendering. Stopping server...');
  server.kill();
}

prerender();
