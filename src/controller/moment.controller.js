const service = require("../service/moment.service");
class MomentController {
  async create(ctx, next) {
    const moment = ctx.request.body;
    console.log(moment);
    const result = await service.createMoment(moment);
    ctx.body = "发表动态成功！";
  }
  async momentDetail(ctx, next) {
    const { mid } = ctx.request.params;
    const result = await service.getMomentDetail(mid);
    ctx.body = result;
  }
  async momentList(ctx, next) {
    const { offset, limit } = ctx.request.query;
    const result = await service.getMomentList(offset, limit);
    ctx.body = result;
  }
  async updateMoment(ctx, next) {
    const { mid, content } = ctx.request.body;
    const result = await service.updateMoment(mid, content);
    ctx.body = "修改成功!";
  }
  async deleteMoment(ctx, next) {
    const { mid } = ctx.request.body;
    const result = await service.deleteMoment(mid)
    ctx.body = "删除成功"
  }
}

module.exports = new MomentController();