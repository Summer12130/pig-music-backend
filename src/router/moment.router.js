const Router = require("koa-router");
const {
  create,
  momentDetail,
  momentList,
  updateMoment,
  deleteMoment
} = require("../controller/moment.controller");
const { verifyMomentPermission } = require("../middleware/auth.middleware");

const momentRouter = new Router({ prefix: "/moment" });
momentRouter.post("/", create);
momentRouter.get("/list", momentList);
momentRouter.get("/:mid", momentDetail);

momentRouter.patch("/update", verifyMomentPermission, updateMoment);
momentRouter.delete("/delete", verifyMomentPermission, deleteMoment);
module.exports = momentRouter;
