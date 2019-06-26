const multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
const IssueOperation = require("../db/helpers/testerCrud");
const app = require('express').Router();


app.post("/addissue",(req,res)=>{
    const json = req.body;
    IssueOperation.addIssue(json,res);
})



app.get("/getIssue",(req,res)=>{
    IssueOperation.getIssues(res);
})




// ******************Multer config***************************

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('Going to Store the Data in Disk');
      cb(null, './uploads')   // upload file Location
    },
    filename: function (req, file, cb) {
      console.log('File name is ',file.fieldname);
      cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
  })

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

  app.post('/uploading',upload.single('file'),(request, response)=>{
    console.log("req file name is ",request.file);
    console.log('Server Upload ......');
    
        response.json({path: request.file.path});
    
          
        
  })

module.exports = app;