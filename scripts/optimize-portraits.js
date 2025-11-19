const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/portraits');
const outputDir = path.join(__dirname, '../public/images/portraits-optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

async function optimizeImages() {
  console.log('🖼️  Optimizing portrait images...\n');
  
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.PNG$/i, '.jpg'));
    
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`Processing ${file} (${sizeMB}MB)...`);
    
    await sharp(inputPath)
      .resize(2048, 2048, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`✅ ${file.replace(/\.PNG$/i, '.jpg')} - ${newSizeMB}MB (${reduction}% reduction)\n`);
  }
  
  console.log('🎉 All images optimized! Replacing originals...\n');
  
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    const optimizedFile = file.replace(/\.PNG$/i, '.jpg');
    fs.copyFileSync(
      path.join(outputDir, optimizedFile),
      path.join(inputDir, optimizedFile)
    );
  }
  
  fs.rmSync(outputDir, { recursive: true });
  console.log('✨ Done! Original files replaced with optimized versions.');
}

optimizeImages().catch(console.error);
