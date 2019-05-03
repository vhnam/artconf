const path = require('path');

module.exports = {
  ignore: ['**/index.js', '**/types.js', '**/Loading/**', '**/MenuItem/**'],
  require: [path.join(__dirname, 'src/App.css')],
  title: 'ArtConf',
};
