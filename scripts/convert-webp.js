import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
  "Chia Seeds.png",
  "Mamra Almonds.png",
  "White Pepper.png",
  "05A.png",
  "Black Cumin Seeds.png",
  "Long Pepper.png"
];

const dir = "d:/dev/Elfurat Spices/lovable/public/assets";

async function main() {
  for (const img of images) {
    const input = path.join(dir, img);
    const name = path.parse(img).name;
    const output = path.join(dir, name + ".webp");
    
    if (fs.existsSync(input)) {
        await sharp(input).webp({ lossless: true }).toFile(output);
        console.log(`Converted ${img} to webp in public/assets`);
        
        // Check if dist exists and copy
        const distDir = "d:/dev/Elfurat Spices/lovable/dist/public/assets";
        const distDir2 = "d:/dev/Elfurat Spices/lovable/dist/assets"; // some vite setups put it here
        if (fs.existsSync(distDir)) {
           fs.copyFileSync(output, path.join(distDir, name + ".webp"));
           console.log(`Copied to ${distDir}`);
        } else if (fs.existsSync(distDir2)) {
           fs.copyFileSync(output, path.join(distDir2, name + ".webp"));
           console.log(`Copied to ${distDir2}`);
        }
    } else {
        console.log(`File not found: ${input}`);
    }
  }
}
main();
