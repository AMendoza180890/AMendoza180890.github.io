import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const portfolioDir = join(root, 'assets', 'img', 'portfolio');
const source = join(portfolioDir, 'background.jpg');

const heroVariants = [
  { name: 'background-mobile.webp', width: 480, quality: 68 },
  { name: 'background-tablet.webp', width: 1024, quality: 75 },
  { name: 'background.webp', width: 1920, quality: 78 },
];

for (const variant of heroVariants) {
  const output = join(portfolioDir, variant.name);
  await sharp(source)
    .rotate()
    .resize({ width: variant.width, withoutEnlargement: true })
    .webp({ quality: variant.quality, effort: 6 })
    .toFile(output);

  const { size } = await sharp(output).metadata().then(async () => {
    const fs = await import('fs/promises');
    const stat = await fs.stat(output);
    return { size: stat.size };
  });
  console.log(`${variant.name}: ${Math.round(size / 1024)} KB`);
}

const projectImages = [
  { file: 'tesorosdeDiosWebsite.jpg', width: 800 },
  { file: 'Bibliotecatesorosdedios.jpg', width: 800 },
];

for (const image of projectImages) {
  const input = join(portfolioDir, image.file);
  const output = join(portfolioDir, image.file.replace(/\.jpg$/i, '.webp'));
  await sharp(input)
    .rotate()
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(output);
  const fs = await import('fs/promises');
  const stat = await fs.stat(output);
  console.log(`${output.split(/[/\\]/).pop()}: ${Math.round(stat.size / 1024)} KB`);
}
