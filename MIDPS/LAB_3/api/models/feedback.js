const mongoose = require('mongoose');
const connection = require('../db-connection');

const feedbackSchema = new mongoose.Schema(
  {
    email: String,
    message: String,
    updatedAt: { type: Date, default: Date.now }
  });

const Feedback = connection.model('Feedback', feedbackSchema);

function addFeedback(data) {
  return Feedback.create(data);
}

function getAllFeedback() {
  return Feedback.find();
}

module.exports = {
  addFeedback,
  getAllFeedback
};
