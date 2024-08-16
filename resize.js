import sharp from "sharp";

const filePath = process.argv[2];

if (!/\.(jpe?g|png)/.test(filePath)) {
  console.log(`File path ${filePath} is not an image`);
  process.exit(1);
}

sharp(filePath)
  .resize(400)
  .webp()
  .toFile(filePath.replace(/\.\w+$/, ".webp"));
