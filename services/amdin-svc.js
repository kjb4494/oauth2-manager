const errorUtil = require("../utils/error-util");
const Admin = require("../models/admin");

module.exports = {
  /**
   * @returns 모든 관리자 정보를 가져옵니다.
   */
  getAll: async function () {
    return await Admin.findAll();
  },

  /**
   * 에러 핸들링 테스트용 서비스 입니다.
   * @param {boolean} e - false일 경우 에러가 발생합니다.
   */
  getErrorTest: function (e) {
    if (!e) {
      throw errorUtil.execpt(errorUtil.type.test);
    }
    return {
      test: "passed!",
    };
  },
};
