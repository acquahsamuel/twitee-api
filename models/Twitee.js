const mongoose = require('mongoose');
const slugify = require('slugify');

const TwiteeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  subTitle: {
    type: String,
  },
  content: {
    type: String,
    default: true,
  },

  twiteeURL: String,

  category: {
    type: String,
    enum: ['business', 'politics', 'entertainment', 'sports', 'general'],
    default: 'general',
  },

  language: {
    type: String,
    enum: ['en', 'tr', 'es'],
    default: 'en',
  },

  status: {
    type: String,
    enum: ['private', 'public'],
    default: 'private',
  },

  allowComments: {
    type: Boolean,
    required: true,
  },

  image: {
    type: String,
    default: 'image-1.png',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },

  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Comment',
    },
  ],
});

TwiteeSchema.pre('save', function (next) {
  this.url = slugify(this.title, {
    lower: true,
  });
  next();
});

module.exports = mongoose.model('Twitee', TwiteeSchema);
