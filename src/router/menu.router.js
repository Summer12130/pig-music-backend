const Router = require("koa-router");
const { getHomeList } = require("../controller/menu.controller");
const menuRouter = new Router({ prefix: "/homelists" });

menuRouter.get("/", getHomeList);

module.exports = menuRouter;
