/**
 * One-time script to parse the DiscreteHeat media library Excel export
 * and generate a typed TypeScript module at /lib/media-library.ts
 *
 * Usage: node scripts/generate-media-library.js
 */

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL_PATH = 'C:/Users/ethan/Downloads/MediaExport-639083080589905832.xlsx';
const OUTPUT_PATH = path.join(__dirname, '..', 'lib', 'media-library.ts');

// ── Classification keyword maps ──

const ROOM_KEYWORDS = {
  'kitchen': ['kitchen', 'plinth'],
  'bedroom': ['bedroom', 'master bedroom'],
  'living-room': ['living room', 'living area', 'lounge', 'cinema room'],
  'bathroom': ['bathroom', ' wc ', 'cloakroom', ' loo '],
  'hallway': ['hallway', 'landing', 'corridor', 'entrance hall'],
  'office': ['office', 'study', ' desk '],
  'open-plan': ['open plan', 'open-plan', 'kitchen dining'],
  'dining-room': ['dining room', 'dining area'],
  'conservatory': ['conservatory', 'orangery', 'garden room', 'patio door', 'bifold'],
};

const PROJECT_KEYWORDS = {
  'retrofit': ['retrofit', 'renovation', 'renovation'],
  'new-build': ['new build', 'new-build', 'modular'],
  'extension': ['extension'],
  'barn-conversion': ['barn conversion', 'barn'],
  'loft-conversion': ['loft conversion', 'loft'],
  'social-housing': ['social housing', 'council', 'shdf', 'warm homes'],
};

const PRODUCT_KEYWORDS = {
  'deco-bm2': ['deco bm2', 'bm2', 'bme2'],
  'deco-bm3': ['deco bm3', 'bm3'],
  'easyclean': ['easyclean', 'easy clean', 'lst'],
  'heated-threshold': ['heated threshold', 'threshold'],
  'kitchen-plinth': ['kitchen plinth', 'plinth heating'],
  'torus-capping': ['torus capping', 'torus'],
  'add2rad': ['add2rad'],
  'thermaskirt-e': ['electric', 'bme2', 'thermaskirt e'],
};

const CONTEXT_KEYWORDS = {
  'after-installation': ['after installation', 'completed', 'finished'],
  'during-installation': ['during installation', 'installing', 'installer', 'fitting', 'cutting', 'lubricating'],
  'before-installation': ['before installation', 'before example', 'radiator'],
  'thermal-imaging': ['thermal imaging', 'flir', 'infra-red', 'infrared', 'thermography'],
  'training': ['training', 'training day', 'cpd'],
  'factory': ['factory', 'packaging', 'manufacturing', 'production', 'forklift', 'pallet'],
  'case-study': ['case study', 'energy house', 'taylor wimpey', 'barratt', 'wigan', 'bellway'],
  'professional-shot': ['professional', 'high quality', 'cinematic', 'high end', 'luxury'],
  'lifestyle': ['lifestyle', 'christmas', 'cosy', 'ambient', 'styled'],
  'technical-data': ['technical data', 'bsria', 'test data', 'graphical illustration'],
};

function classify(text, keywordMap) {
  var lower = ' ' + text.toLowerCase() + ' ';
  var results = [];
  var keys = Object.keys(keywordMap);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var keywords = keywordMap[key];
    for (var j = 0; j < keywords.length; j++) {
      if (lower.indexOf(keywords[j]) !== -1) {
        if (results.indexOf(key) === -1) {
          results.push(key);
        }
        break;
      }
    }
  }
  return results;
}

function extractUUID(url) {
  if (!url) return '';
  var match = url.match(/id=([a-f0-9-]+)/i);
  return match ? match[1] : '';
}

function parseTags(tagStr) {
  if (!tagStr || tagStr.trim() === '') return [];
  return tagStr.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t.length > 0; });
}

function escapeString(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

// ── Main ──

var wb = XLSX.readFile(EXCEL_PATH);
var ws = wb.Sheets[wb.SheetNames[0]];
var data = XLSX.utils.sheet_to_json(ws);

console.log('Parsed ' + data.length + ' entries from Excel');

// Build classified entries
var entries = [];
for (var i = 0; i < data.length; i++) {
  var row = data[i];
  var id = extractUUID(row['Public URL'] || '');
  if (!id) continue;

  var title = (row['Title'] || '').trim();
  var tags = parseTags(row['Tags'] || '');
  var description = (row['Description'] || '').trim();
  var metaDescription = (row['Meta Description'] || '').trim();
  var suggestedUse = (row['Suggested Use'] || '').trim();
  var altText = (row['Alt Text'] || '').trim();
  var fileName = (row['File Name'] || '').trim();
  var fileSize = (row['File Size'] || '').trim();

  // Combine all text fields for classification
  var allText = [title, tags.join(' '), description, metaDescription, suggestedUse].join(' ');

  // Also check tag values directly
  var tagLower = tags.map(function(t) { return t.toLowerCase(); });

  // Classify from tags first, then from allText
  var rooms = classify(allText, ROOM_KEYWORDS);
  var projects = classify(allText, PROJECT_KEYWORDS);
  var products = classify(allText, PRODUCT_KEYWORDS);
  var contexts = classify(allText, CONTEXT_KEYWORDS);

  // Check tags for direct matches to context types
  for (var ti = 0; ti < tagLower.length; ti++) {
    var tag = tagLower[ti];
    if (tag === 'after installation' && contexts.indexOf('after-installation') === -1) contexts.push('after-installation');
    if (tag === 'during installation' && contexts.indexOf('during-installation') === -1) contexts.push('during-installation');
    if (tag === 'before installation' && contexts.indexOf('before-installation') === -1) contexts.push('before-installation');
    if (tag === 'thermal imaging' && contexts.indexOf('thermal-imaging') === -1) contexts.push('thermal-imaging');
    if (tag === 'training' && contexts.indexOf('training') === -1) contexts.push('training');
    if ((tag === 'factory' || tag === 'behind the scenes') && contexts.indexOf('factory') === -1) contexts.push('factory');
    if (tag === 'case study' && contexts.indexOf('case-study') === -1) contexts.push('case-study');
    if (tag === 'technical data' && contexts.indexOf('technical-data') === -1) contexts.push('technical-data');
    if (tag === 'retrofit' && projects.indexOf('retrofit') === -1) projects.push('retrofit');
    if (tag === 'new build' && projects.indexOf('new-build') === -1) projects.push('new-build');
    if (tag === 'healthcare' && rooms.indexOf('healthcare') === -1) rooms.push('healthcare');
    if (tag === 'deco bm2' && products.indexOf('deco-bm2') === -1) products.push('deco-bm2');
    if (tag === 'deco bm3' && products.indexOf('deco-bm3') === -1) products.push('deco-bm3');
    if (tag === 'torus capping' && products.indexOf('torus-capping') === -1) products.push('torus-capping');
    if (tag === 'easyclean' && products.indexOf('easyclean') === -1) products.push('easyclean');
    if (tag === 'electric' && products.indexOf('thermaskirt-e') === -1) products.push('thermaskirt-e');
    if (tag === 'heated threshold' && products.indexOf('heated-threshold') === -1) products.push('heated-threshold');
    if (tag === 'plinths' && products.indexOf('kitchen-plinth') === -1) products.push('kitchen-plinth');
    if (tag === 'add2rad' && products.indexOf('add2rad') === -1) products.push('add2rad');
    // Room tags
    if (tag === 'kitchen' && rooms.indexOf('kitchen') === -1) rooms.push('kitchen');
    if (tag === 'bedroom' && rooms.indexOf('bedroom') === -1) rooms.push('bedroom');
    if (tag === 'living room' && rooms.indexOf('living-room') === -1) rooms.push('living-room');
    if (tag === 'bathroom' && rooms.indexOf('bathroom') === -1) rooms.push('bathroom');
    if (tag === 'hallway' && rooms.indexOf('hallway') === -1) rooms.push('hallway');
    if (tag === 'office' && rooms.indexOf('office') === -1) rooms.push('office');
    if (tag === 'patio door' && rooms.indexOf('conservatory') === -1) rooms.push('conservatory');
    if (tag === 'convervatory' && rooms.indexOf('conservatory') === -1) rooms.push('conservatory');
  }

  // Generate alt text from title if none provided
  var finalAlt = altText || title || 'ThermaSkirt installation';

  entries.push({
    id: id,
    title: title,
    alt: finalAlt,
    description: description,
    metaDescription: metaDescription,
    suggestedUse: suggestedUse,
    tags: tags,
    fileName: fileName,
    fileSize: fileSize,
    rooms: rooms,
    projects: projects,
    products: products,
    contexts: contexts,
  });
}

console.log('Classified ' + entries.length + ' valid entries');

// ── Generate TypeScript output ──

var tsLines = [];

tsLines.push("// Auto-generated from MediaExport Excel. Do not edit manually.");
tsLines.push("// Re-generate with: node scripts/generate-media-library.js");
tsLines.push("//");
tsLines.push("// Last generated: " + new Date().toISOString().split('T')[0]);
tsLines.push("");
tsLines.push("// ── Types ──");
tsLines.push("");
tsLines.push("export type RoomType =");
tsLines.push("  | 'kitchen' | 'bedroom' | 'living-room' | 'bathroom'");
tsLines.push("  | 'hallway' | 'office' | 'corridor' | 'open-plan'");
tsLines.push("  | 'dining-room' | 'conservatory' | 'healthcare';");
tsLines.push("");
tsLines.push("export type ProjectType =");
tsLines.push("  | 'retrofit' | 'new-build' | 'extension' | 'barn-conversion'");
tsLines.push("  | 'loft-conversion' | 'social-housing';");
tsLines.push("");
tsLines.push("export type ProductType =");
tsLines.push("  | 'deco-bm2' | 'deco-bm3' | 'easyclean' | 'heated-threshold'");
tsLines.push("  | 'kitchen-plinth' | 'torus-capping' | 'add2rad' | 'thermaskirt-e';");
tsLines.push("");
tsLines.push("export type ContextType =");
tsLines.push("  | 'after-installation' | 'during-installation' | 'before-installation'");
tsLines.push("  | 'thermal-imaging' | 'training' | 'factory' | 'case-study'");
tsLines.push("  | 'professional-shot' | 'lifestyle' | 'technical-data';");
tsLines.push("");
tsLines.push("export interface MediaImage {");
tsLines.push("  id: string;");
tsLines.push("  url: string;");
tsLines.push("  thumb: string;");
tsLines.push("  title: string;");
tsLines.push("  alt: string;");
tsLines.push("  description: string;");
tsLines.push("  metaDescription: string;");
tsLines.push("  suggestedUse: string;");
tsLines.push("  tags: string[];");
tsLines.push("  fileName: string;");
tsLines.push("  fileSize: string;");
tsLines.push("  rooms: RoomType[];");
tsLines.push("  projects: ProjectType[];");
tsLines.push("  products: ProductType[];");
tsLines.push("  contexts: ContextType[];");
tsLines.push("}");
tsLines.push("");
tsLines.push("// ── Data ──");
tsLines.push("");
tsLines.push("export const mediaLibrary: MediaImage[] = [");

for (var e = 0; e < entries.length; e++) {
  var entry = entries[e];
  var baseUrl = 'https://www.discreteheat.com/MediaHandler.ashx?id=' + entry.id;
  tsLines.push("  {");
  tsLines.push("    id: '" + entry.id + "',");
  tsLines.push("    url: '" + baseUrl + "',");
  tsLines.push("    thumb: '" + baseUrl + "&thumb=1',");
  tsLines.push("    title: '" + escapeString(entry.title) + "',");
  tsLines.push("    alt: '" + escapeString(entry.alt) + "',");
  tsLines.push("    description: '" + escapeString(entry.description) + "',");
  tsLines.push("    metaDescription: '" + escapeString(entry.metaDescription) + "',");
  tsLines.push("    suggestedUse: '" + escapeString(entry.suggestedUse) + "',");
  tsLines.push("    tags: [" + entry.tags.map(function(t) { return "'" + escapeString(t) + "'"; }).join(', ') + "],");
  tsLines.push("    fileName: '" + escapeString(entry.fileName) + "',");
  tsLines.push("    fileSize: '" + escapeString(entry.fileSize) + "',");
  tsLines.push("    rooms: [" + entry.rooms.map(function(r) { return "'" + r + "'"; }).join(', ') + "],");
  tsLines.push("    projects: [" + entry.projects.map(function(p) { return "'" + p + "'"; }).join(', ') + "],");
  tsLines.push("    products: [" + entry.products.map(function(p) { return "'" + p + "'"; }).join(', ') + "],");
  tsLines.push("    contexts: [" + entry.contexts.map(function(c) { return "'" + c + "'"; }).join(', ') + "],");
  tsLines.push("  },");
}

tsLines.push("];");
tsLines.push("");
tsLines.push("// ── Query Helpers ──");
tsLines.push("");
tsLines.push("export function getImagesByRoom(room: RoomType): MediaImage[] {");
tsLines.push("  return mediaLibrary.filter((img) => img.rooms.includes(room));");
tsLines.push("}");
tsLines.push("");
tsLines.push("export function getImagesByProduct(product: ProductType): MediaImage[] {");
tsLines.push("  return mediaLibrary.filter((img) => img.products.includes(product));");
tsLines.push("}");
tsLines.push("");
tsLines.push("export function getImagesByProject(project: ProjectType): MediaImage[] {");
tsLines.push("  return mediaLibrary.filter((img) => img.projects.includes(project));");
tsLines.push("}");
tsLines.push("");
tsLines.push("export function getImagesByContext(context: ContextType): MediaImage[] {");
tsLines.push("  return mediaLibrary.filter((img) => img.contexts.includes(context));");
tsLines.push("}");
tsLines.push("");
tsLines.push("export function getImagesByTag(tag: string): MediaImage[] {");
tsLines.push("  const lowerTag = tag.toLowerCase();");
tsLines.push("  return mediaLibrary.filter((img) =>");
tsLines.push("    img.tags.some((t) => t.toLowerCase().includes(lowerTag))");
tsLines.push("  );");
tsLines.push("}");
tsLines.push("");
tsLines.push("export function getImageById(id: string): MediaImage | undefined {");
tsLines.push("  return mediaLibrary.find((img) => img.id === id);");
tsLines.push("}");
tsLines.push("");
tsLines.push("export function getBestImage(filters: {");
tsLines.push("  room?: RoomType;");
tsLines.push("  product?: ProductType;");
tsLines.push("  project?: ProjectType;");
tsLines.push("  context?: ContextType;");
tsLines.push("}): MediaImage | undefined {");
tsLines.push("  return mediaLibrary.find((img) => {");
tsLines.push("    if (filters.room && !img.rooms.includes(filters.room)) return false;");
tsLines.push("    if (filters.product && !img.products.includes(filters.product)) return false;");
tsLines.push("    if (filters.project && !img.projects.includes(filters.project)) return false;");
tsLines.push("    if (filters.context && !img.contexts.includes(filters.context)) return false;");
tsLines.push("    return true;");
tsLines.push("  });");
tsLines.push("}");
tsLines.push("");

// Ensure lib directory exists
var libDir = path.join(__dirname, '..', 'lib');
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true });
}

fs.writeFileSync(OUTPUT_PATH, tsLines.join('\n'), 'utf8');
console.log('Written to ' + OUTPUT_PATH);
console.log('Total entries: ' + entries.length);
