'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const controllers = require('./controllers');

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next(); // next is now a function
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

app.use(bodyParser());
router.get('/teams', controllers.getAcceptedTeams);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3003);
