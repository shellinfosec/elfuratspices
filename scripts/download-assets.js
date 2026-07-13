import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CDN = "https://elfuratspices.com/assets";
const targetDir = path.resolve(__dirname, '../public/assets');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// These are derived from brand.ts and products.ts
const filesToDownload = [
  // LOGOS
  "Multicolor 3x1 Logo.png",
  "Multicolor Icon.png",
  "Multicolor Round Logo.png",
  "Multicolor Square Logo.png",
  "White 3x1 Logo.png",
  "White Icon.png",
  "White Round logo.png",
  "White Square logo.png",
  
  // CERTS
  "APEDA Logo.png",
  "FSSAI Logo.png",
  "FDA-Emblem-logo.png",
  "ISO Logo.png",
  "Spice Board Logo.png",
  
  // HERO
  "01.png", "03A.png", "04A.png", "04B.png", "04C.png", "04D.png",
  "05A.png", "05B.png", "05C.png", "05D.png",
  "06A.png", "06B.png", "06C.png", "06D.png",
  "07A.png", "07B.png", "07C.png",
  "11A.png", "11B.png", "11C.png", "11D.png",
  "12A.png", "12B.png", "12C.png",
  "13A.png", "13B.png",
  "14A.png", "14B.png",
  "15A.png", "15B.png", "15C.png",
  "16A.png", "16B.png",
  "18A.png", "20A.png",
  
  // PRODUCTS
  "Green Cardamom.png", "Black Cardamom.png", "Cinnamon.png", "Cloves.png",
  "Cumin Seeds.png", "Coriander Seeds.png", "Fennel Seeds.png", "Fenugrek Seeds.png",
  "Mustard Seeds.png", "Nigella Seeds.png", "Black Cumin Seeds.png", "Carom Seeds.png",
  "Sesame Seeds.png", "Star Anise.png", "Mace.png", "Nutmeg.png", "Long Pepper.png", "White Pepper.png",
  "Turmeric Powder.png", "Red Chilli Powder.png", "Coriander Powder.png", "Cumin Powder.png",
  "Black Pepper Powder.png", "Ginger Powder.png", "Garlic Powder.png", "Dry Mango Powder.png",
  "Dried Ginger.png", "Garam Masala.png", "Chaat Masala.png", "Curry Powder.png", "Panch Phoron.png",
  "Bay Leaves.png", "Curry Leaves.png", "Dried Fenugreek Leaves.png", "Asafoetida.png", "Saffron.png",
  "Kokum.png", "Tamarind.png", "Rock Salt.png", "Black Salt.png", "Pomegranate Seed Powder.png",
  "Bamboo Shoot Powder.png", "Almonds.png", "Mamra Almonds.png", "Cashews.png", "Pistachio.png",
  "Walnuts.png", "Peanuts.png", "Chia Seeds.png", "Watermelon Seeds.png", "Foxnut.png",
  "Pure Ghee.png", "Paneer.png", "Cheese.png", "Curd.png"
];

function downloadFile(fileName) {
  return new Promise((resolve, reject) => {
    const fileUrl = `${CDN}/${encodeURIComponent(fileName)}`;
    const destPath = path.join(targetDir, fileName);
    
    // Skip if file already exists
    if (fs.existsSync(destPath)) {
        console.log(`Skipping ${fileName}, already exists.`);
        resolve();
        return;
    }

    const file = fs.createWriteStream(destPath);

    https.get(fileUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${fileUrl}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${fileName}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log(`Downloading ${filesToDownload.length} files to ${targetDir}...`);
  for (const file of filesToDownload) {
    try {
      await downloadFile(file);
    } catch (e) {
      console.error(`Error downloading ${file}:`, e.message);
    }
  }
  console.log("Done.");
}

main();
