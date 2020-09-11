const fs = require('fs');
const md2json = require('markdown-to-json');

const enFiles = fs
  .readdirSync('markdownParse/definitions/en_US')
  .map((filename) => `markdownParse/definitions/en_US/${filename}`);

const enDefinitions = md2json.parse(enFiles, { pretty: true, content: true });

fs.writeFileSync(
  'src/database/seed-data/definitions/en_US.json',
  enDefinitions
);

const frFiles = fs
  .readdirSync('markdownParse/definitions/fr_FR')
  .map((filename) => `markdownParse/definitions/fr_FR/${filename}`);

const frDefinitions = md2json.parse(frFiles, { pretty: true, content: true });

fs.writeFileSync(
  'src/database/seed-data/definitions/fr_FR.json',
  frDefinitions
);

const nlFiles = fs
  .readdirSync('markdownParse/definitions/nl_NL')
  .map((filename) => `markdownParse/definitions/nl_NL/${filename}`);

const nlDefinitions = md2json.parse(nlFiles, { pretty: true, content: true });

fs.writeFileSync(
  'src/database/seed-data/definitions/nl_NL.json',
  nlDefinitions
);
