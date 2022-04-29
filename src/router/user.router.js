const Router = require("koa-router");
const { create } = require("../controller/user.controller");
const { onVerify, enhancePhone } = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/user" });

userRouter.post("/", onVerify, enhancePhone, create);

module.exports = userRouter;