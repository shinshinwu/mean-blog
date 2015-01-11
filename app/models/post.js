var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
  author: String,
  title: String,
  body: String,
  created_at: Timestamp
});