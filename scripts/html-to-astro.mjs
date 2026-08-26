/**
 * Convert legacy static HTML shells into Astro pages under src/pages/.
 * Extracts <title>, <main id="main">, footer, and window.PAGE.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const outRoot = path.join(root, 'src', 'pages');

function walkHtml(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'src' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

function extract(html) {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'IGCSE Islamiyat';

  const pageMatch = html.match(/window\.PAGE\s*=\s*(\{[\s\S]*?\});/);
  const pageLiteral = pageMatch ? pageMatch[1].trim() : '{ page: "home" }';

  const mainMatch = html.match(/<main\s+id="main"\s*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) throw new Error('no <main id="main"> found');
  const mainHtml = mainMatch[1].trim();

  const footerMatch = html.match(/<footer>\s*<p class="mono">([\s\S]*?)<\/p>\s*<\/footer>/i);
  const footerHtml = footerMatch
    ? footerMatch[1].trim()
    : 'Cambridge IGCSE Islamiyat 0493';

  return { title, pageLiteral, mainHtml, footerHtml };
}

function toAstroSource({ title, pageLiteral, mainHtml, footerHtml }, depth) {
  const layoutImport = `${'../'.repeat(depth)}layouts/CourseLayout.astro`;
  // JSON.stringify for embedding HTML as a JS string in the frontmatter
  const mainJson = JSON.stringify(mainHtml);
  const titleJson = JSON.stringify(title);
  const footerJson = JSON.stringify(footerHtml);

  return `---
import CourseLayout from '${layoutImport}';

const page = ${pageLiteral};
const title = ${titleJson};
const footerHtml = ${footerJson};
const mainHtml = ${mainJson};
---

<CourseLayout title={title} page={page} footerHtml={footerHtml}>
  <main id="main" set:html={mainHtml} />
</CourseLayout>
`;
}

const files = walkHtml(root);
let count = 0;
for (const file of files) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  // Skip anything not at site roots we care about
  if (rel.startsWith('templates/') || rel.startsWith('supabase/')) continue;

  const html = fs.readFileSync(file, 'utf8');
  let extracted;
  try {
    extracted = extract(html);
  } catch (err) {
    console.warn('skip', rel, err.message);
    continue;
  }

  const outRel = rel.replace(/\.html$/i, '.astro');
  const outFile = path.join(outRoot, outRel);
  const dir = path.dirname(outRel).replace(/\\/g, '/');
  const depth = dir === '.' ? 1 : dir.split('/').filter(Boolean).length + 1;
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, toAstroSource(extracted, depth), 'utf8');
  count++;
  console.log('wrote', path.relative(root, outFile).replace(/\\/g, '/'));
}

console.log(`Converted ${count} pages`);
