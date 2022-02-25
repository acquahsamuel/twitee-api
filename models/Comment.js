const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  approveComment: {
    type: Boolean,
    default: false,
  },
  twiteeId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Twitee',
      required: true,
    },
  ],

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
