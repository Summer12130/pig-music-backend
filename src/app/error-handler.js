const errorTypes = require("../constants/error-types");

const errorHandler = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorTypes.USER_NAME_OR_PASSWORD_REQUIRED:
      status = 400;
      message = "用户名或手机号不能为空！";
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409;
      message = "用户已经存在~";
      break;
    case errorTypes.UNPROMISSION:
      status = 401;
      message = "抱歉, 您没有权限!";
      break;
    default:
      status = 404;
      message = "NOT FOUND";
      break;
  }
  ctx.status = status;
  ctx.body = {
    code: status,
    message,
  };
};

module.exports = errorHandler;
