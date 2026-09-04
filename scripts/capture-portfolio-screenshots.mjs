import { mkdir, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const viewport = { width: 1600, height: 1000 };
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(rootDir, "public", "projects");

const projects = [
  { filename: "01-mudahai.webp", url: "https://mudahai.com" },
  { filename: "02-ys-academy.webp", url: "https://ysacademy.my" },
  { filename: "03-ronaldo-fake-chat.webp", url: "https://play.google.com/store/apps/details?id=com.yusufsuhair.ronaldofakevideocall&hl=en" },
  { filename: "05-myclipper.webp", url: "https://myclipper.vercel.app" },
  { filename: "06-ejoe-nft.webp", url: "http://ejoe-nft.vercel.app/" },
];

const hiddenSelectors = [
  "[id*='cookie' i]",
  "[class*='cookie' i]",
  "[id*='consent' i]",
  "[class*='consent' i]",
  "[id*='chat' i]",
  "[class*='chat-widget' i]",
  "[class*='chatbot' i]",
  "[class*='intercom' i]",
  "iframe[title*='chat' i]",
  "iframe[title*='messenger' i]",
];

async function hideOverlays(page) {
  await page.addStyleTag({
    content: `${hiddenSelectors.join(",")} { display: none !important; visibility: hidden !important; }`,
  });

  await page.evaluate(() => {
    const overlayTerms = /cookie|consent|privacy|chat|messenger|intercom|whatsapp|help/i;

    for (const element of document.querySelectorAll("body *")) {
      const htmlElement = element;
      const text = htmlElement.textContent?.trim().slice(0, 160) ?? "";
      const label = [
        htmlElement.id,
        htmlElement.className,
        htmlElement.getAttribute("aria-label"),
        htmlElement.getAttribute("title"),
        text,
      ].join(" ");
      const style = window.getComputedStyle(htmlElement);

      if (
        overlayTerms.test(label) &&
        (style.position === "fixed" || style.position === "sticky" || htmlElement.tagName === "IFRAME")
      ) {
        htmlElement.style.setProperty("display", "none", "important");
      }
    }
  });
}

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });

try {
  for (const project of projects) {
    const page = await context.newPage();
    const temporaryPath = path.join(outputDir, project.filename.replace(/\.webp$/, ".png"));

    try {
      await page.goto(project.url, { waitUntil: "networkidle", timeout: 60_000 });
      await hideOverlays(page);
      await page.screenshot({ path: temporaryPath, fullPage: false, type: "png" });
      await sharp(temporaryPath).webp({ quality: 88 }).toFile(path.join(outputDir, project.filename));
      await unlink(temporaryPath);
      console.log(`Saved public/projects/${project.filename}`);
    } catch (error) {
      console.error(`Failed: ${project.url}`);
      throw error;
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
