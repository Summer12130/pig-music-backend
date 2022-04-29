const connection = require("../app/database");
class MomentService {
  async createMoment(moment) {
    const { uid, content } = moment;
    console.log(content, uid);
    const statement = `INSERT INTO moment (uid, content) VALUES (?,?);`;
    const [result] = await connection.execute(statement, [uid, content]);
    return result;
  }
  async getMomentDetail(mid) {
    const statement = `
    SELECT 
    m.id as id, m.content as content, m.updateAt as time,
    JSON_OBJECT('id', u.id, 'nickname', u.nickname, 'avatarUrl', u.avatarUrl, 'signature', u.signature) as creator,
    JSON_ARRAYAGG(
      JSON_OBJECT('id', c.id, 'content', c.content, 'commentId', c.comment_id, 'time', c.updateAt,
                  'user', JSON_OBJECT('id',cu.id, 'nickname', cu.nickname, 'avatarUrl', cu.avatarUrl))
    ) comments
    FROM moment as m 
    LEFT JOIN user u ON m.uid = u.id
    LEFT JOIN comment c ON c.moment_id = m.id
    LEFT JOIN user cu ON c.user_id = cu.id
    WHERE m.id = ?;
    `;
    const [result] = await connection.execute(statement, [mid]);
    return result[0];
  }
  async getMomentList(offset, limit) {
    const statement = `
    SELECT 
    m.id as id, m.content as content, m.updateAt as time,
    JSON_OBJECT('id', u.id, 'nickname', u.nickname, 'avatarUrl', u.avatarUrl, 'signature', u.signature) as creator,
    (SELECT COUNT(*) FROM comment as c WHERE c.moment_id = m.id) as commentCount
    FROM moment as m 
    LEFT JOIN user u 
    ON m.uid = u.id
    ORDER BY m.updateAt DESC
    LIMIT ?, ?;
    `;
    const [result] = await connection.execute(statement, [offset, limit]);
    return result;
  }
  async updateMoment(mid, content) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, mid]);
    return result[0];
  }
  async deleteMoment(mid) {
    const statement = `DELETE FROM moment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [mid]);
    return result;
  }
}

module.exports = new MomentService();
