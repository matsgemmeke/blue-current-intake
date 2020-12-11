const express = require('express');
const app = express();

app.use(express.static('./dist/blue-current-intake'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/blue-current-intake/'}),
);

app.listen(process.env.PORT || 8080);
