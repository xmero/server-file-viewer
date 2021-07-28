const fs = require('fs');

const getType = require('./get-type');

const BLACKLIST = ['.gitignore', 'node_modules','package-lock.json'];

const getChildren = (path) => {
  const children = fs.readdirSync(path).filter((child) => !BLACKLIST.includes(child));

  const childWithType = children.map((childNode) => {
    const type = getType(path, childNode);

    return { path: childNode, type};
  });

  return childWithType;
};

module.exports = getChildren;
