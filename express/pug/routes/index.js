const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.render('index', { title: 'Main' });
});

// 로그인
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// 회원가입
router.get('/join', (req, res) => {
  res.render('join', { title: 'Join' });
});

module.exports = router;

