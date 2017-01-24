'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
    ctx.set('Access-Control-Allow-Origin', '*')
  } catch (err) {
    ctx.body = { message: err.message};
    ctx.status = err.status || 500;
    ctx.set('Access-Control-Allow-Origin', '*')
  }
});

app.use(bodyParser());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3003);
