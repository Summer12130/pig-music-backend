const service = require("../service/user.service");
class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    const result = await service.createUser(user);
    ctx.body = {
      code: 200,
      message: "创建成功!"
    };
  }
}

module.exports = new UserController();