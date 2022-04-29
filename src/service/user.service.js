const connection = require("../app/database");
class UserService {
  async createUser(user) {
    const { id, nickname, phone, avatarUrl, city, signature } = user;
    const statement = `INSERT INTO user (id, nickname, phone, avatarUrl, city, signature) VALUES (?,?,?,?,?,?);`;
    const result = await connection.execute(statement, [
      id,
      nickname,
      phone,
      avatarUrl,
      city,
      signature,
    ]);
    return result;
  }
  async getUserName(nickname) {
    const statement = `SELECT * from user WHERE nickname = ?;`;
    const result = await connection.execute(statement, [nickname]);
    return result[0];
  }
}

module.exports = new UserService();
