/**
 * Astro build.format "file" emits folder/index.astro as folder.html.
 * Our content-tree and in-page links expect folder/index.html — restore that.
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');

function walkAstroIndexes(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkAstroIndexes(full, acc);
    else if (entry.name === 'index.astro') acc.push(full);
  }
  return acc;
}

const pagesRoot = path.resolve('src/pages');
const indexes = walkAstroIndexes(pagesRoot);

let moved = 0;
for (const indexAstro of indexes) {
  const pageDir = path.dirname(indexAstro);
  const relDir = path.relative(pagesRoot, pageDir).replace(/\\/g, '/');

  // Root src/pages/index.astro → dist/index.html (already correct)
  if (!relDir || relDir === '.') continue;

  const from = path.join(dist, `${relDir}.html`);
  const to = path.join(dist, relDir, 'index.html');

  if (!fs.existsSync(from)) {
    console.warn('missing built file:', path.relative(process.cwd(), from));
    continue;
  }

  fs.mkdirSync(path.dirname(to), { recursive: true });
  if (fs.existsSync(to)) fs.unlinkSync(to);
  fs.renameSync(from, to);
  moved++;
  console.log('index:', `${relDir}.html` + ' → ' + `${relDir}/index.html`);
}

console.log(`Restored ${moved} index.html routes`);
