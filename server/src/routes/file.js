const express = require('express');

const router = express.Router();

const getAbsolutePath = require('../utils/get-path');

router.get('*/', (req, res) => {
  const filePath = getAbsolutePath(req.params['0']);
  
  res.sendFile(filePath, (err) => {
    if (err) {
      res.send(`An error ocurred loading file: ${filePath}`);
      res.status(err.status).end();
    }
  });
});

module.exports = router;
