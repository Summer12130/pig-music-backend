const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");
const errorHandler = require("./error-handler");
const useRoute = require('../router')

const app = new Koa();
app.use(cors());
app.use(bodyParser());
useRoute(app)

app.on("error", errorHandler);
module.exports = app;
