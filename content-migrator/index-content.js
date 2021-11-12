/* jshint esversion:6 */
const glob = require('glob');
const fs = require('fs');
const frontMatter = require('front-matter');
const numberToRoman = require('big-roman').numberToRoman;
const pathJoin = require('path').join;


const CONTENT = '../content';
const INDEXES = '../website/projects/scimaps/src/assets/indexes';


function readMarkdown(mdFile) {
  const data = frontMatter(fs.readFileSync(mdFile).toString());
  return Object.assign(data.body ? {body: data.body} : {}, data.attributes);
}
function readFiles(globString) {
  return glob.sync(globString).map(readMarkdown);
}
function readJSON(path) {
  return JSON.parse(fs.readFileSync(path));
}
function writeMinifiedJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data));
}
function writeJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
function readIndex(indexName) {
  return readJSON(pathJoin(INDEXES, indexName + '.json'));
}
function index(globString, path) {
  const data = readFiles(pathJoin(CONTENT, globString));
  writeJSON(pathJoin(INDEXES, path), data);
}

index('mapIteration/**/readme.md', 'mapIterations.json');
index('macroscopeIteration/**/readme.md', 'macroscopeIterations.json');
index('map/**/readme.md', 'maps.json');
index('macroscope/**/readme.md', 'macroscopes.json');
index('gallery/**/readme.md', 'galleries.json');
index('person/**/readme.md', 'people.json');
index('book/**/readme.md', 'books.json');
index('news/**/readme.md', 'news.json');
index('learning-materials/**/readme.md', 'learning-materials.json')
index('venues/**/readme.md', 'venues.json');
index('maker-videos/**/readme.md', 'maker-videos.json');
index('blog/**/readme.md', 'blogs.json');

function writeAppMapIndex(mapType) {
  const iterations = readIndex(`${mapType}Iterations`).reduce((acc, iter) => {
    const roman = numberToRoman(iter.iteration);
    acc[iter.iteration] = {
      title: `${roman}. ${iter.title}`,
      body: iter.body,
      thumbnails: {},
      iteration: iter.iteration,
      slug: `${mapType}Iteration/${iter.iteration}`,
      directory: ''
    };
    return acc;
  }, {});
  for (const map of readIndex(`${mapType}s`)) {
    const link = `${mapType}/${map.en.iteration}/${map.en.sequence}`;
    iterations[map.en.iteration].thumbnails[map.en.sequence] = {
      title: map.en.title,
      image: `assets/content/${link}/${map.en.image.sm}`,
      link
    };
  }
  const data = Object.keys(iterations).sort((a, b) => b - a).map((iteration) => {
    const iter = iterations[iteration];
    iter.thumbnails = Object.keys(iter.thumbnails).sort((a, b) => a - b).map((sequence) =>
      iter.thumbnails[sequence]
    );
    return iter;
  });

  writeMinifiedJSON(pathJoin(INDEXES, `app-${mapType}s.json`), data);
}

writeAppMapIndex('map');
writeAppMapIndex('macroscope');
