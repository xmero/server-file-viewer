const path = require('path');

const getAbsolutePath = (filePath) => {
  const root = path.dirname(require.main.filename);
  return `${root}${filePath}`;
};

module.exports = getAbsolutePath;
