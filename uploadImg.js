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

createFolder(uploadFolder);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder); 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage })

async function waitForInitialItem() {
  return new Promise((resolve, reject) => {
    const invId = setInterval(() => {
      const txt = fs.createReadStream('./101.txt');
      const lineReader = readline.createInterface({ input: txt });
      lineReader.on('line', function (line) {
        res.send(line);
      });
      const isAcquired = !!lineReader
      console.log(isAcquired)
      if (isAcquired) {
        clearInterval(invId)
        resolve(fs.createReadStream('./101.txt'))
      }
    }, 500)
  })
}

app.post('/upload', upload.single('image'), async function (req, res, next) {
  var file = req.file;
  
  const txt = await waitForInitialItem()
  
  console.log('save image')
  res.send('200');
});

app.listen(3000);