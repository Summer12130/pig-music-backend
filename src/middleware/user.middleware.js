const errorTypes = require("../constants/error-types");
const service = require("../service/user.service");
const enhancePassword = require("../utils/enhance-password");
const onVerify = async (ctx, next) => {
  const { nickname, phone } = ctx.request.body;
  console.log(nickname, phone);
  if (!nickname || !phone || nickname === "" || phone.length < 7) {
    const err = new Error(errorTypes.USER_NAME_OR_PASSWORD_REQUIRED);
    return ctx.app.emit("error", err, ctx);
  }

  // 用户名重复
  const result = await service.getUserName(nickname);
  console.log(result[0]);
  if (result[0]) {
    const err = new Error(errorTypes.USER_ALREADY_EXISTS);
    return ctx.app.emit("error", err, ctx);
  }
  await next();
};

const enhancePhone = async (ctx, next) => {
  const { phone } = ctx.request.body;
  ctx.request.body.phone = enhancePassword(phone);
  await next();
};

module.exports = {
  onVerify,
  enhancePhone,
};
