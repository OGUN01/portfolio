const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const svgPath = path.join(publicDir, 'safari-pinned-tab.svg');

async function generateIcons() {
  const svgBuffer = fs.readFileSync(svgPath);
  
  // Generate PNGs
  const sizes = [
    { size: 32, name: 'icon.png' },
    { size: 180, name: 'apple-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' }
  ];

  for (const { size, name } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, name));
      
    // Use the 32x32 PNG as favicon.ico
    if (name === 'icon.png') {
      fs.copyFileSync(
        path.join(publicDir, 'icon.png'),
        path.join(publicDir, 'favicon.ico')
      );
    }
  }

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
