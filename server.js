const fs = require('fs');
const express = require('express');
const multer = require('multer')
const app = express();
const readline = require('readline');


const createFolder = function (folder) {
  try {
    fs.accessSync(folder);
  } catch (e) {
    fs.mkdirSync(folder);
  }
};

const uploadFolder = './upload/';
var randomName = Date.now()

createFolder(uploadFolder);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + randomName + '.jpg');
  }
});

const upload = multer({ storage: storage })

app.post('/upload', upload.single('image'), async function (req, res, next) {
  var file = req.file;

  var inputStream = await fs.createReadStream(uploadFolder + randomName + '.txt');
  if (inputStream) {
    var lineReader = readline.createInterface({ input: inputStream });
    lineReader.on('line', function (line) {
      res.send(line);
    });
  }
  await res.send('200');
});

app.listen(3000);
