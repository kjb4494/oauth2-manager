# oauth2-manager

nodejs express study toy project

## 개발환경

- node v18.16.1
- npm 9.5.1
- node_modules 설치
  ```shell
  npm install
  ```
- 로컬 서버 실행

  - 데이터베이스 설정

    ```json
    <!-- config/config.sample.json을 참고하여 config/config.json을 작성 -->
    {
      "development": {
        "username": "",
        "password": "",
        "database": "",
        "host": "",
        "dialect": "mysql"
      },
      "test": {
        "username": "",
        "password": "",
        "database": "",
        "host": "",
        "dialect": "mysql"
      },
      "production": {
        "username": "",
        "password": "",
        "database": "",
        "host": "",
        "dialect": "mysql"
      }
    }
    ```

  - 실행 명령어

    ```shell
    DEBUG=myapp:* npm start
    ```

- vscode settings
  ```json
  {
    "workbench.colorTheme": "Default Dark+",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "aws.suppressPrompts": {
      "regionAddAutomatically": true
    },
    "editor.unicodeHighlight.nonBasicASCII": false
  }
  ```
- vscode installed extensions
  - Auto Close Tag
  - Auto Rename Tag
  - AWS Toolkit
  - ESLint
  - Git Graph
  - Prettier - Code formatter
  - TypeScript Vue Plugin (Volar)
  - Vue Language Features (Volar)
  - vue3-snippets-for-vscode

## Sequelize (ORM) 사용하기

- 설치
  ```shell
  npm install sequelize sequelize-cli mysql2
  ```
- 초기화
  ```shell
  npx sequelize-cli init
  ```
- config/database.js 파일 생성

  ```javascript
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
  ```

- config/config.json에 데이터베이스 정보 설정 (.gitignore 설정 할 것!)

  ```json
  {
    "development": {
      "username": "",
      "password": "",
      "database": "",
      "host": "",
      "dialect": "mysql"
    },
    "test": {
      "username": "",
      "password": "",
      "database": "",
      "host": "",
      "dialect": "mysql"
    },
    "production": {
      "username": "",
      "password": "",
      "database": "",
      "host": "",
      "dialect": "mysql"
    }
  }
  ```

## Serverless로 변경하기

- serverless tool 설치
  ```shell
  npm install -g serverless
  ```
- serverless 적용하기
  ```shell
  <!-- .gitignore을 잠시 삭제 후 진행해야함 -->
  serverless create --template aws-nodejs
  ```
- 프로젝트에 맞게 handler.js 수정
- 테스트를 위해 serverless offine 설치
  ```shell
  npm install serverless-offline --save-dev
  npm install serverless-http --save-dev
  ```
- serverless.yml 수정
- 로컬에서 offine 모드로 테스트
  ```shell
  serverless offline
  ```

## 참고

- [_Express 애플리케이션 생성기_](https://expressjs.com/ko/starter/generator.html)
- [_Node.js 모범 사례_](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.korean.md)
