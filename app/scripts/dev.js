const path = require('path');
const nodemon = require('nodemon');

const scriptPath = path.resolve(path.join(__dirname, 'startdevserver.js'));
const basePath = path.dirname(path.dirname(scriptPath));

nodemon({
  script: scriptPath,
  watch: [
    path.resolve(__dirname),
    path.join(basePath, 'configs'),
    path.join(basePath, 'package.json'),
  ]
}).on('quit', () => {
  process.exit();
});
