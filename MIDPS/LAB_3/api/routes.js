'use strict';

const router = require('koa-router')();
const Team = require('./models/team');
const Feedback = require('./models/feedback');

router.post('/teams', async (ctx) => {
  const data = JSON.parse(Object.keys(ctx.request.body)[0]);
  await Team.addTeam(data.team);
  ctx.status = 201
});

router.get('/teams/accepted', async (ctx) => {
  const teams = await Team.getAcceptedTeams()
  ctx.status = 200;
  ctx.body = {
    teams
  }
});

router.get('/teams/declined', async (ctx) => {
  const teams = await Team.getDeclinedTeams();
  ctx.status = 200;
  ctx.body = {
    teams
  }
});

router.get('/teams', async (ctx) => {
  const teams = await Team.getAllTeams();
  ctx.status = 200;
  ctx.body = {
    teams
  }
});

router.get('/feedback', async (ctx) => {
  const result = await Feedback.getAllTeams(feedback);
  ctx.status = 200;
  ctx.body = {
    feedback: result
  }
});

router.post('/feedback', async (ctx) => {
  console.log(Object.keys(ctx.request.body)[0])
  const data = JSON.parse(Object.keys(ctx.request.body)[0]);
  await Feedback.addFeedback(data.feedback);
  ctx.status = 201;
});

module.exports = router;