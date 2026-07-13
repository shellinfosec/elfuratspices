import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const routes = [
  "/",
  "/about",
  "/products",
  "/contact",
  "/export-inquiries",
  "/products/whole-spices",
  "/product/green-cardamom",
  "/product/black-cardamom",
  "/product/cinnamon",
  "/product/cloves",
  "/product/cumin-seeds",
  "/product/coriander-seeds",
  "/product/fennel-seeds",
  "/product/fenugreek-seeds",
  "/product/mustard-seeds",
  "/product/nigella-seeds",
  "/product/black-cumin",
  "/product/carom-seeds",
  "/product/sesame-seeds",
  "/product/star-anise",
  "/product/mace",
  "/product/nutmeg",
  "/product/long-pepper",
  "/product/white-pepper",
  "/products/ground-spices",
  "/product/turmeric-powder",
  "/product/red-chilli-powder",
  "/product/coriander-powder",
  "/product/cumin-powder",
  "/product/black-pepper-powder",
  "/product/ginger-powder",
  "/product/garlic-powder",
  "/product/dry-mango-powder",
  "/product/dried-ginger",
  "/products/masala-blends",
  "/product/garam-masala",
  "/product/chaat-masala",
  "/product/curry-powder",
  "/product/panch-phoron",
  "/products/aromatics",
  "/product/bay-leaves",
  "/product/curry-leaves",
  "/product/dried-fenugreek-leaves",
  "/product/asafoetida",
  "/product/saffron",
  "/product/kokum",
  "/product/tamarind",
  "/product/rock-salt",
  "/product/black-salt",
  "/product/pomegranate-seed-powder",
  "/product/bamboo-shoot-powder",
  "/products/nuts",
  "/product/almonds",
  "/product/mamra-almonds",
  "/product/cashews",
  "/product/pistachio",
  "/product/walnuts",
  "/product/peanuts",
  "/products/dried-fruits-seeds",
  "/product/chia-seeds",
  "/product/watermelon-seeds",
  "/product/foxnut-plain",
  "/products/makhana",
  "/product/foxnut",
  "/products/dairy-staples",
  "/product/pure-ghee",
  "/product/honey",
  "/product/paneer",
  "/product/cheese",
  "/product/curd"
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
