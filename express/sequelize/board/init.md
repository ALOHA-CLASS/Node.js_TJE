# npm 초기화
npm init

# 모듈 설치
npm install express morgan pug sequelize sequelize-cli mysql2 dotenv nodemon cookie-parser express-session

# 개별 설치
npm install express
npm install morgan
npm install pug
npm install sequelize
npm install sequelize-cli
npm install mysql2
npm install dotenv
npm install nodemon
npm install cookie-parser
npm install express-session

---

# sequelize 초기화 (sequelize-cli 모듈 이용)
npx sequelize init

### sequelize 설정 파일들이 생성됨
### 자동 생성된 models/index.js 에 에러 발생이슈 등으로 코드 수정


```

    const Sequelize = require('sequelize');
    // ✅ 모델 import
    const Board = require('./board');              

    const env = process.env.NODE_ENV || 'development';
    const config = require('../config/config')[env];
    const db = {};

    const sequelize = new Sequelize(config.database, config.username, config.password, config);

    db.sequelize = sequelize;

    // 모델 등록 및 설정
    db.Board = Board;

    // 모델 초기화 메소드 호출
    Board.initiate(sequelize);

    // 연관 관계 설정 메소드 호출 (필요에 따라 사용)
    Board.associate(db);

    module.exports = db;


```