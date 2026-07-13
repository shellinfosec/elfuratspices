const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public/assets');

async function processDirectory() {
  const files = fs.readdirSync(dir);
  let converted = 0;
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const webpPath = path.join(dir, `${base}.webp`);
      const oldPath = path.join(dir, file);
      
      try {
        await sharp(oldPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(webpPath);
        fs.unlinkSync(oldPath);
        console.log(`Converted ${file} to ${base}.webp`);
        converted++;
      } catch(e) {
        console.error(`Error converting ${file}:`, e);
      }
    }
  }
  console.log(`Finished converting ${converted} files.`);
}

processDirectory();
