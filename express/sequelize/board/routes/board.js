const express = require('express')
const Sequelize = require('sequelize');             // ✅ Sequelize 추가
const Board = require('../models/board')            // ✅ Board 모델 import
const router = express.Router()

// 👩‍💻 게시글 목록
router.get('/', async (req, res) => {
    console.log('게시글 목록...');
    let boardList = []
    try {
        boardList = await Board.findAll()           // ✅ 전체 데이터 조회
    } catch (error) {
        console.log(error);
    }

    // console.log(boardList);
    res.render('board/list', {boardList} )
})



// 👩‍💻 게시글 등록
router.get('/insert', (req, res) => {
    console.log('게시글 등록 화면...');
    res.render('board/insert')
})



// 👩‍💻 게시글 등록
router.post('/', async (req, res) => {
    console.log('게시글 등록...');
    // 구조분해할당
    const { title, writer, content } = req.body;
    const newBoard = { title, writer, content };

    let result = 0
    try {
        result = await Board.create(newBoard)           // ✅ 데이터 등록
    } catch (error) {
        console.log(error);
    }

    console.log(`등록 result : ${result}`);
    res.redirect('/board');
});

// 👩‍💻 게시글 수정 페이지
router.get('/update/:id', async (req, res) => {
    console.log('게시글 수정 화면...');
    console.log(`id : ${req.params.id}`);
    let id = req.params.id
    let board = await Board.findByPk(id)
    res.render('board/update', { board, id });
});

// 👩‍💻 게시글 수정
router.post('/update', async (req, res) => {
    console.log('게시글 수정...');
    const { id, title, writer, content } = req.body;

    let result = 0
    try {
        result = await Board.update({
            title: title,
            writer: writer,
            content: content,
            upd_date: Sequelize.literal('now()')
        }, {
            where: {board_no: id}
        })
    } catch (error) {
        console.log(error);
    }
    console.log(`수정 result : ${result}`);
    res.redirect(`/board/${id}`);
});

// 👩‍💻 게시글 삭제
router.post('/delete', async (req, res) => {
    console.log('게시글 삭제...');
    const id = req.body.id;

    let result = 0
    try {
        result = await Board.destroy({
            where: { board_no : id }
        })
    } catch (error) {
        console.log(error);
    }
    console.log(`삭제 result : ${result}`);

    res.redirect('/board');
});
  

// 👩‍💻 게시글 읽기
// 요청 경로에 파라미터 매핑 방법 ➡ '/:파라미터명'
router.get('/:id', async (req, res) => {
    console.log('게시글 읽기 화면...');
    console.log(`id : ${req.params.id}`);
    let id = req.params.id
    let board = await Board.findByPk(id)
    console.log(board);
    res.render('board/read', {board, id})
})


module.exports = router;
  