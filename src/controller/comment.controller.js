const commentService = require("../service/comment.service.js");
class CommentController {
  async createComment(ctx, next) {
    const comment = ctx.request.body;
    const result = await commentService.createComment(comment);
    ctx.body = {
      code: 200,
      message: "评论成功",
      result,
    };
  }
  async replyComment(ctx, next) {
    const reply = ctx.request.body;
    const result = await commentService.replyComment(reply);
    ctx.body = {
      code: 200,
      message: "回复成功",
      result,
    };
  }
  async deleteComment(ctx, next) {
    const { cid } = ctx.request.body;
    const result = await commentService.deleteComment(cid);
    ctx.body = {
      code: 200,
      message: "删除成功",
      result,
    };
  }
  async getCommentList(ctx, next) {
    const { mid } = ctx.query;
    const result = await commentService.getCommentListByMomentId(mid);
    ctx.body = {
      code: 200,
      message: "获取评论列表成功",
      result,
    };
  }
}

module.exports = new CommentController();
