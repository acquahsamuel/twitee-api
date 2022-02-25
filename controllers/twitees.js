const Twitee = require('../models/Twitee');
const Comment = require('../models/Comment');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../utils/async');

// @desc      Get all twitee
// @access    Private/Admin
exports.getTwitees = asyncHandler(async (req, res) => {
  const twitees = await Twitee.find({});
  res.status(200).json({
    success: true,
    count: twitees.length,
    data: twitees,
  });
});

// @desc      Create twitee
// @access    Private/Admin
exports.createTwitee = asyncHandler(async (req, res) => {
  const twitee = await Twitee.create(req.body);
  res.status(201).json({
    success: true,
    data: twitee,
  });
});

// @desc      Get single twitee
// @access    Private/Admin
// eslint-disable-next-line consistent-return
exports.getTwitee = asyncHandler(async (req, res, next) => {
  const twitee = await Twitee.findById(req.params.id);
  if (!twitee) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404),
    );
  }

  res.status(200).json({
    success: true,
    data: twitee,
  });
});

// @desc      Update twitee
// @access    Private/Admin
// eslint-disable-next-line consistent-return
exports.updateTwitee = asyncHandler(async (req, res, next) => {
  const twitee = await Twitee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  // if the twitee with the id is not found return error
  if (!twitee) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404),
    );
  }

  res.status(200).json({
    success: true,
    data: twitee,
  });
});

// @desc      Delete twitee
// @access    Private/Admin
// eslint-disable-next-line consistent-return
exports.deleteTwitee = asyncHandler(async (req, res, next) => {
  const twitee = await Twitee.findByIdAndDelete(req.params.id);

  // if the twitee with the id is not found return error
  if (!twitee) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404),
    );
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});
