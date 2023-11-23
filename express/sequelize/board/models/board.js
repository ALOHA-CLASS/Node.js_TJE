const { DataTypes, Model, Sequelize } = require('sequelize');

class Board extends Model {
  static initiate(sequelize) {
    Board.init(
      {
        board_no: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        writer: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        reg_date: {
          type: 'TIMESTAMP',
          // defaultValue: 'now()',
        },
        upd_date: {
          type: 'TIMESTAMP',
          // defaultValue: 'now()',
        },
      },
      {
        sequelize,
        modelName: 'Board',
        tableName: 'board',
        timestamps: false,      // true ➡ createdAt, updatedAt 컬럼 자동생성
      }
    );
  }

  static associate(db) {
    // Add associations if needed
  }
}

module.exports = Board;
