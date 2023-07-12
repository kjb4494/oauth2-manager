module.exports = {
  /**
   * 성공 응답 페이로드 입니다.
   * @param {string} message
   * @param {*} obj
   */
  success: function (message, obj) {
    return {
      timestamp: Date.now(),
      data: {
        message: message,
        detail: obj,
      },
    };
  },

  /**
   * 실패 응답 페이로드 입니다.
   * @param {number} status
   * @param {number} code
   * @param {string} message
   */
  error: function (status, code, message) {
    return {
      timestamp: Date.now(),
      error: {
        status: status,
        code: code,
        message: message,
      },
    };
  },
};
