var constants = require("../constants");

module.exports = {
  getUsers: function () {
    return [
      { id: "test1@example.com", name: "test user 1" },
      { id: "test2@example.com", name: "test user 2" },
    ];
  },
  getErrorTest: function (e) {
    // 에러 핸들링 테스트
    if (!e) {
      const err = new Error("Test Error!");
      err.status = 400;
      err.code = constants.ERR_CODE_TEST;
      throw err;
    }
    return {
      test: "passed!",
    };
  },
};
