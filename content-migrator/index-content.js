/* jshint esversion:6 */
const glob = require('glob');
const fs = require('fs');
const frontMatter = require('front-matter');
const pathJoin = require('path').join;


const CONTENT = '../content';
const INDEXES = '../website/projects/scimaps/src/indexes';

function readFiles(globString) {
  return glob.sync(globString).map(f => {
    const data = frontMatter(fs.readFileSync(f).toString());
    return Object.assign(data.body ? {body: data.body} : {}, data.attributes);
  });
}
function writeJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
function index(globString, path) {
  const data = readFiles(pathJoin(CONTENT, globString));
  writeJSON(pathJoin(INDEXES, path), data);
}

index('map/**/readme.md', 'maps.json');
index('macroscope/**/readme.md', 'macroscopes.json');
index('gallery/**/readme.md', 'galleries.json');
index('person/**/readme.md', 'people.json');
