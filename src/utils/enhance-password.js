const crypto = require("crypto");
const enhancePassword = (password) => {
  const md5 = crypto.createHash("md5");
  return md5.update(password).digest("hex");
};

module.exports = enhancePassword;
