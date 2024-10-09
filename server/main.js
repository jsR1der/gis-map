const express = require('express');
const cors = require('cors');
const fs = require('fs');

const filepath = __dirname + '/data.json';
const app = express();
app.use(cors())

app.get('/data', async (req, res) => {
  // await readJson(filepath, () => null);
  const stream = fs.createReadStream(filepath, {highWaterMark: 64 * 512});
  stream.on('err', (err) => {
    fs.writeFile(`${__dirname}/error.txt`, err.message, {flag: 'a+'}, (data) => {

    })
  })
  stream.pipe(res);
})

app.listen(3000);
