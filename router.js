"use strict";
const express = require('express'),
      router = express.Router(),
      path = require('path'),
      fs = require('fs-extra'),
      multer  = require('multer'),
      upload = multer({ dest: 'uploads/' });

router.use(express.static(path.resolve(__dirname, 'client')));

router.post('/uploads', upload.single('checkfile'), function(req, res) {
  fs.remove(req.file.path, err => {
    
  })

  res.json({filename: req.file.originalname, size: req.file.size, mimetype: req.file.mimetype });
});

module.exports = router;