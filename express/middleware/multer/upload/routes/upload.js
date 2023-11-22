const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// 파일 업로드를 위한 Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 업로드된 파일의 저장 경로
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 업로드된 파일의 원래 파일명으로 저장
  }
});

const upload = multer({ storage: storage });

/* GET upload page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'upload' });
});

// 파일 업로드를 처리하는 라우트
router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('ok');
});

module.exports = router;