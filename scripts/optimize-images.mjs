// Builds the light WebP files the site actually serves. Sources stay untouched.
// Run with `npm run optimize:images` after capturing or replacing a screenshot.
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const QUALITY = 72;
const PROJECT_WIDTHS = [480, 960];

const projects = [
  { slug: "mudahai", source: "https://mudahai.com/opengraph-image?b83510d8ccd8f3df" },
  { slug: "lepakmamak", source: "https://lepakmamak.my/og.png" },
  { slug: "slipstream", source: "public/screenshot-slipstream-f1.png" },
  { slug: "ys-academy", source: "https://www.ysacademy.my/og-image.png?v=whiteboard-3" },
  { slug: "alafasy", source: "public/projects/16-alafasy.webp" },
  { slug: "ai-balance", source: "public/projects/10-ai-balance.webp" },
  { slug: "shotivo", source: "public/projects/08-shotivo.webp" },
  { slug: "ganti-solat", source: "public/projects/09-ganti-solat.webp" },
  { slug: "teleprompter", source: "public/projects/12-teleprompter.webp" },
  { slug: "petal", source: "public/projects/13-petal.webp" },
  { slug: "tiny-stats", source: "public/projects/11-tiny-stats.webp" },
  { slug: "fynecta", source: "public/screenshot-fynecta.png" },
  { slug: "dalbass", source: "public/screenshot-dalbass.png" },
  { slug: "fake-live", source: "public/projects/14-fake-live.webp" },
  { slug: "fake-celebs", source: "public/projects/15-fake-celebs-call.webp" },
  { slug: "myclipper", source: "public/screenshot-myclipper.png" },
  { slug: "ejoe-nft", source: "public/screenshot-ejoe-nft.png" },
  { slug: "walid", source: "public/screenshot-walid.png" },
  { slug: "rembuyang", source: "public/screenshot-rembuyang.png" },
  { slug: "kasoot", source: "public/projects/17-kasoot.webp" },
  { slug: "maison", source: "public/projects/18-maison.webp" },
];

// Each file is shown at no more than half this width, so it stays sharp on 2x screens.
const singles = [
  { output: "public/hero/hero1.webp", source: "public/hero1.jpg", width: 320 },
  { output: "public/hero/hero2.webp", source: "public/hero2.jpg", width: 320 },
  { output: "public/hero/hero3.webp", source: "public/hero3.jpg", width: 320 },
  { output: "public/hero/hero4.webp", source: "public/hero4.jpg", width: 320 },
  { output: "public/hermes-logo.webp", source: "public/hermes-logo.png", width: 160 },
];

// Published as they are, so sources must be safe to show. Never use the original TTT.jpg:
// it prints the IC number. ttt-redacted.jpg has it blacked out in the pixels.
const certificateDir = path.join(homedir(), "Documents/ys-academy-web/output/posters/assets");
const certificates = [
  { slug: "hrd-corp-ttt", source: path.join(certificateDir, "ttt-redacted.jpg") },
  { slug: "google-ai", source: path.join(certificateDir, "cert-google.jpg") },
  { slug: "securiti-ai-governance", source: path.join(certificateDir, "cert-securiti.jpg") },
  { slug: "blockchain-developer", source: path.join(certificateDir, "cert-blockchain.jpg") },
];

async function loadSource(source) {
  if (!source.startsWith("http")) return readFile(path.resolve(rootDir, source));
  const response = await fetch(source);
  if (!response.ok) throw new Error(`${source} returned ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}

async function writeWebp(input, output, width, quality = QUALITY) {
  const target = path.join(rootDir, output);
  await mkdir(path.dirname(target), { recursive: true });
  const data = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();
  await writeFile(target, data);
  const { size } = await stat(target);
  console.log(`${output}  ${Math.round(size / 1024)} KB`);
}

for (const { slug, source } of projects) {
  const input = await loadSource(source);
  for (const width of PROJECT_WIDTHS) {
    await writeWebp(input, `public/projects/${slug}-${width}.webp`, width);
  }
}

for (const { output, source, width } of singles) {
  await writeWebp(await loadSource(source), output, width);
}

for (const { slug, source } of certificates) {
  const input = await loadSource(source);
  await writeWebp(input, `public/certificates/${slug}.webp`, 1400, 82);
  await writeWebp(input, `public/certificates/${slug}-thumb.webp`, 240);
}
