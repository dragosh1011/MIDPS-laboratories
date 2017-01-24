const mongoose = require('mongoose');
const connection = require('../db-connection');

const teamSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    founder: String,
    founded: Number,
    phone: String,
    email: String,
    officialName: String,
    equipmentColor: String,
    status: { type: String, default: 'PENDING' },
    updatedAt: { type: Date, default: Date.now }
  });

const Team = connection.model('Team', teamSchema);

function addTeam(data) {
  return Team.create(data);
}

function getAllTeams() {
  return Team.find();
}

function getAcceptedTeams() {
  return Team.find().where('status').equals('ACCEPTED');
}

function getDeclinedTeams() {
  return Team.find().where('status').equals('DECLINED');
}

module.exports = {
  addTeam,
  getAllTeams,
  getAcceptedTeams,
  getDeclinedTeams
};
