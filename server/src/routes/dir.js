const express = require('express');

const router = express.Router();

const getAbsolutePath = require('../utils/get-path');
const getChildren = require('../services/get-children');
const getType = require('../services/get-type');

router.get('*/', (req, res) => {
  const path = req.params['0'];
  const filePath = getAbsolutePath(path);

  const dir = {
    path,
    type: getType(filePath),
    children: getChildren(filePath)
  };

  res.send(dir);
});

module.exports = router;
