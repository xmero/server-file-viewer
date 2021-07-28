const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

const PORT = 8080;

app.use(cors());

app.use('/dir', routes.dir);
app.use('/file', routes.file);
app.use('/download', routes.download);

app.listen(PORT, () => {
  console.log(`File tree viewer listening on port ${PORT}`);
});
