/* jshint esversion:6 */
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const YAML = require('js-yaml');
const TurndownService = require('turndown');
const slugify = require('slugify');

const TURNDOWN_SERVICE = new TurndownService();
const DATA_DIR = './old-website/data';
const IMAGES_DIR = './old-website/images';
const CONTENT_DIR = '../content';

function toSlug(str) {
  return slugify(str, {lower: true, strict: true});
}
function htmlToMarkdown(html) {
  return TURNDOWN_SERVICE.turndown(html);
}
function readTable(tableName) {
  const jsonFile = path.join(DATA_DIR, tableName + '.json');
  return JSON.parse(fs.readFileSync(jsonFile));
}
function writeMarkdown(fileName, data) {
  const body = data.body;
  if (body) {
    data = Object.assign({}, data);
    delete data.body;
  }
  const frontMatter = YAML.safeDump(data);
  const md = `---\n${frontMatter}---\n${body || ''}`;
  mkdirp.sync(path.dirname(fileName));
  fs.writeFileSync(fileName, md);
}

function convertLanguages() {
  const languages = readTable('languages');
  const langFile = path.join(CONTENT_DIR, 'site/languages.md');
  writeMarkdown(langFile, {languages});
}

function convertMapAuthors() {
  readTable('maps_author')
    .forEach((author) => {
      const imageExt = author.thumbnail.split('.').slice(-1)[0];

      const data = {
        name: author.name,
        image: `image.${imageExt}`,
        roles: ['maker']
      };
      const personDir = path.join(CONTENT_DIR, 'person', toSlug(data.name));
      const mdFile = path.join(personDir, 'readme.md');
      const srcImage = path.join(IMAGES_DIR, author.thumbnail);
      const destImage = path.join(personDir, data.image);

      writeMarkdown(mdFile, data);
      fs.copyFileSync(srcImage, destImage);
    });
}

function convertMapsAndMacroscopes() {
  const authorSlug = readTable('maps_author').reduce((acc, author) => {
    acc[author.id] = toSlug(author.name);
    return acc;
  }, {});
  const mapAuthors = readTable('maps_authorrole').reduce((acc, role) => {
    const authors = acc[role.map_id] = acc[role.map_id] || [];
    authors.push(authorSlug[role.author_id] + '/readme');
    return acc;
  }, {});
  const languages = readTable('languages').reduce((acc, lang) => {
    acc[lang.abbreviation] = lang.abbr_short;
    return acc;
  }, {});
  const mapTranslations = readTable('map_translations').reduce((acc, trans) => {
    const translations = acc[trans.map_id] = acc[trans.map_id] || {};
    translations[languages[trans.language_id]] = {
      title: trans.title,
      body: htmlToMarkdown(trans.description),
      references: [htmlToMarkdown(trans.reference)],
      creditLine: trans.translation_credit
    };
    return acc;
  }, {});

  readTable('maps_map')
    .filter(m => m.iteration_id && m.iteration_order)
    .forEach((map) => {
      const imageExt = map.main_image.split('.').slice(-1)[0];

      const data = {
        title: map.title,
        iteration: map.iteration_id,
        sequence: map.iteration_order,
        body: htmlToMarkdown(map.description),
        makers: mapAuthors[map.id] || [],
        year: map.created,
        references: [htmlToMarkdown(map.reference)],
        image: {
          sm: `image.sm.${imageExt}`,
          med: `image.med.${imageExt}`,
          lg: `image.lg.${imageExt}`
        },
        externalLink: map.link
      };
      const padIteration = (''+data.iteration).padStart(2,'0');
      const padSequence = (''+data.sequence).padStart(2,'0');

      if (data.iteration <= 10) {
        data.image.tiles = `content/tiles/it-${padIteration}-${padSequence}/`;
      }
      const collection = data.iteration <= 10 ? 'map' : 'macroscope';
      const mapDir = path.join(CONTENT_DIR, collection, '' + data.iteration, '' + data.sequence);
      const mdFile = path.join(mapDir, 'readme.md');
      writeMarkdown(mdFile, Object.assign({en: data}, mapTranslations[map.id]));

      const srcImgName = `IT_${padIteration}_${padSequence}_${map.main_image}`;
      const srcImagesDir = path.join(IMAGES_DIR, 'maps');
      const smSrc = path.join(srcImagesDir, '80W', srcImgName);
      fs.copyFileSync(smSrc, path.join(mapDir, data.image.sm));
      const medSrc = path.join(srcImagesDir, '160W', srcImgName);
      fs.copyFileSync(medSrc, path.join(mapDir, data.image.med));
      const lgSrc = path.join(srcImagesDir, '865W', srcImgName);
      fs.copyFileSync(lgSrc, path.join(mapDir, data.image.lg));
    });
}

function convertStaticPages() {
  readTable('vwStaticPages').forEach((data) => {
    data.body = htmlToMarkdown(data.content);
    delete data.content;

    data.name = data.name.replace('.html', '');
    const mdFile = path.join(CONTENT_DIR, 'static-pages', data.name, 'readme.md');
    writeMarkdown(mdFile, data);
  });
}

convertMapAuthors();
convertStaticPages();
convertMapsAndMacroscopes();
convertLanguages();
