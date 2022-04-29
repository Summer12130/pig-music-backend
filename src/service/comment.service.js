const connection = require("../app/database");
class CommentService {
  async createComment(comment) {
    const { uid, content, mid } = comment;
    const statement = `INSERT INTO comment (content, user_id, moment_id) VALUES (?, ? ,?);`;
    const [result] = await connection.execute(statement, [content, uid, mid]);
    return result;
  }
  async replyComment(reply) {
    const { uid, content, mid, cid } = reply;
    const statement = `INSERT INTO comment (content, user_id, moment_id, comment_id) VALUES (?, ? ,?, ?);`;
    const [result] = await connection.execute(statement, [
      content,
      uid,
      mid,
      cid,
    ]);
    return result;
  }
  async deleteComment(cid) {
    const statement = `DELETE FROM comment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [cid]);
    return result;
  }
  async getCommentListByMomentId(mid) {
    const statement = `
    SELECT 
    c.id id, c.content content, c.comment_id commentId, c.createAt time,
    JSON_OBJECT('id',u.id, 'nickname', u.nickname, 'avatarUrl', u.avatarUrl) as creator
    FROM comment c 
    LEFT JOIN user u ON c.user_id = u.id
    WHERE c.moment_id = ? ;`;
    const [result] = await connection.execute(statement, [mid]);
    return result;
  }
}

module.exports = new CommentService();
