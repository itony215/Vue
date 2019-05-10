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

function getFile(path, time_out, res) {
    const timeout = setInterval(function() {

        const file = path;
        const fileExists = fs.existsSync(file);

        console.log('Checking for: ', file);
        console.log('Exists: ', fileExists);

        if (fileExists) {
	   var inputStream = fs.createReadStream(file);
           var lineReader = readline.createInterface({ input: inputStream });
           lineReader.on('line', function(line) {
             console.log(line);
             res.send(line);
           });

           clearInterval(timeout);
        }
    }, time_out);
};

app.post('/upload', upload.single('image'), function (req, res, next) {
  var file = req.file;
  console.log('save image')

  
  var inputFile = uploadFolder + randomName + '.txt';
  var resp = getFile(inputFile, 3000, res)  
  console.log (resp)
  //res.send('200');
  //res.send(resp);
});



app.listen(3002);
