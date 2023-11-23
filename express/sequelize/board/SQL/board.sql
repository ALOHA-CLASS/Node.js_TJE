-- BOARD 테이블 생성
CREATE TABLE `board` (
  `board_no` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `writer` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `reg_date` timestamp NULL DEFAULT now(),
  `upd_date` timestamp NULL DEFAULT now(),
  PRIMARY KEY (`board_no`)
);


-- 샘플 데이터
INSERT INTO `board` (`title`, `writer`, `content`, `reg_date`, `upd_date`)
VALUES
  ('제목1', '작성자1', '내용1', NOW(), NOW()),
  ('제목2', '작성자2', '내용2', NOW(), NOW()),
  ('제목3', '작성자3', '내용3', NOW(), NOW()),
  ('제목4', '작성자4', '내용4', NOW(), NOW()),
  ('제목5', '작성자5', '내용5', NOW(), NOW()),
  ('제목6', '작성자6', '내용6', NOW(), NOW()),
  ('제목7', '작성자7', '내용7', NOW(), NOW()),
  ('제목8', '작성자8', '내용8', NOW(), NOW()),
  ('제목9', '작성자9', '내용9', NOW(), NOW()),
  ('제목10', '작성자10', '내용10', NOW(), NOW());
