const replace = require('replace-in-file');

const options = {
  files: './dist/img-magick.umd.js',
  from: 'stacktrace$$1[0].fileName;',
  to: 'stacktrace$$$1[2].fileName;',
};

replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });