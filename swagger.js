const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API Documentation for Your Application",
    },
    servers: [
      {
        url: "http://localhost:3000", // 애플리케이션의 서버 URL
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // 라우트 파일의 경로 또는 패턴
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
