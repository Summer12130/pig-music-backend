const Router = require("koa-router");
const {
  createComment,
  replyComment,
  deleteComment,
  getCommentList
} = require("../controller/comment.controller");
const { verifyCommentPermission } = require("../middleware/auth.middleware");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.get('/', getCommentList)

commentRouter.post("/", createComment);
commentRouter.post("/reply", replyComment);

commentRouter.delete('/delete', verifyCommentPermission, deleteComment)
module.exports = commentRouter;
