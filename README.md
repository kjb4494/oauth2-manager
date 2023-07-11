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

## 참고

- [_Express 애플리케이션 생성기_](https://expressjs.com/ko/starter/generator.html)
- [_Node.js 모범 사례_](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.korean.md)
