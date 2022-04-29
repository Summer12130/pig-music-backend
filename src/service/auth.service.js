const connection = require("../app/database");
class AuthService {
  async checkMoment(uid, mid) {
    const statement = `SELECT * FROM moment WHERE uid = ? AND id = ?;`;
    const [result] = await connection.execute(statement, [uid, mid]);
    return result.length ? true : false;
  }
  async checkComment(uid, cid) {
    const statement = `SELECT * FROM comment WHERE user_id = ? AND id = ?;`;
    const [result] = await connection.execute(statement, [uid, cid]);
    return result.length ? true : false;
  }
}
module.exports = new AuthService();
