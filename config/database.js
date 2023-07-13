const { Sequelize } = require("sequelize");

// 개발 환경에서의 설정을 사용합니다.
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.json")[env];

// Sequelize 인스턴스를 생성합니다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// sequelize 객체를 내보냅니다.
module.exports = sequelize;
