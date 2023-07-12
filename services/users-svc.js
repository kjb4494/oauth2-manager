var error = require("../utils/error-util");

module.exports = {
  /**
   * @returns 모든 유저 정보를 가져옵니다.
   */
  getUsers: function () {
    return [
      { id: "test1@example.com", name: "test user 1" },
      { id: "test2@example.com", name: "test user 2" },
    ];
  },

  /**
   * 에러 핸들링 테스트용 서비스 입니다.
   * @param {boolean} e - false일 경우 에러가 발생합니다.
   */
  getErrorTest: function (e) {
    if (!e) {
      throw error.execpt(error.type.test);
    }
    return {
      test: "passed!",
    };
  },
};
