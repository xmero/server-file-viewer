const fs = require('fs');

const getType = (path, childNode = '') => {
    return fs.lstatSync(`${path}/${childNode}`).isDirectory() && 'folder' || 'file';
};

module.exports = getType;
