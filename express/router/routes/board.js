const express = require('express')

const router = express.Router()

let boardList = [
    { title : '제목1', writer : '작성자1', content : '내용1' },
    { title : '제목2', writer : '작성자2', content : '내용2' },
    { title : '제목3', writer : '작성자3', content : '내용3' },
]


// 👩‍💻 게시글 목록
router.get('/', (req, res) => {
    res.render('board/list', {boardList} )
})



// 👩‍💻 게시글 등록
router.get('/insert', (req, res) => {
    res.render('board/insert')
})



// 👩‍💻 게시글 등록
router.post('/', (req, res) => {
    // 구조분해할당
    const { title, writer, content } = req.body;
    // const title = req.body.title 
    // const writer = req.body.writer
    // const content = req.body.content

    const newBoard = { title, writer, content };
    boardList.push(newBoard);
    res.redirect('/board');
});

// 👩‍💻 게시글 수정 페이지
router.get('/update/:id', (req, res) => {
    console.log(`id : ${req.params.id}`);
    let id = req.params.id
    const board = boardList[id];
    res.render('board/update', { board, id });
});

// 👩‍💻 게시글 수정
router.post('/update', (req, res) => {
    const { id, title, writer, content } = req.body;
    boardList[id] = { title, writer, content };
    res.redirect(`/board/${id}`);
});

// 👩‍💻 게시글 삭제
router.post('/delete', (req, res) => {
    const id = req.body.id;
    console.log('삭제 : ' + id);
    boardList.splice(id, 1);
    res.redirect('/board');
});
  

// 👩‍💻 게시글 읽기
// 요청 경로에 파라미터 매핑 방법 ➡ '/:파라미터명'
router.get('/:id', (req, res) => {
    console.log(`id : ${req.params.id}`);
    let id = req.params.id
    let board = boardList[id]
    res.render('board/read', {board, id})
})


module.exports = router;
  