module.exports = {
  /**
   * @param {errorTypeObject} typeObject - 에러 타입 딕셔너리에 등록된 객체
   * @returns {ErrorConstructor} throw 시킬 Error 객체를 반환합니다.
   */
  execpt: function (typeObject) {
    const err = new Error(typeObject.message);
    err.status = typeObject.status;
    err.code = typeObject.code;
    return err;
  },

  /**
   * 에러 타입 객체
   * @typedef {object} errorTypeObject
   * @property {string} message - 에러 메시지
   * @property {string} code - 에러 코드
   * @property {string} status - HTTP 상태 코드
   */

  /**
   * 에러 타입 딕셔너리
   * @typedef {object} errorType
   * @property {errorTypeObject} test - 테스트 에러 타입
   */
  type: {
    test: { message: "Test Error!", code: 40000, status: 400 },
  },
};
