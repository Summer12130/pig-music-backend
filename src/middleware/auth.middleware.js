const authService = require("../service/auth.service");
const errorTypes = require("../constants/error-types");
const verifyMomentPermission = async (ctx, next) => {
  const { uid, mid } = ctx.request.body;
  const flag = await authService.checkMoment(uid, mid);
  if (!flag) {
    const err = new Error(errorTypes.UNPROMISSION);
    return ctx.app.emit("error", err, ctx);
  }
  await next();
};
const verifyCommentPermission = async (ctx, next) => {
  const { uid, cid } = ctx.request.body;
  const flag = await authService.checkComment(uid, cid);
  if (!flag) {
    const err = new Error(errorTypes.UNPROMISSION);
    return ctx.app.emit("error", err, ctx);
  }
  await next();
};

module.exports = {
  verifyMomentPermission,
  verifyCommentPermission,
};
