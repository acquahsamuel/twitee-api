const User = require('../models/User');

const express = require('express');
const {
    getComments,
    createComment,
    getComment,
    updateComment,
    deleteComment
} = require("../controllers/comments");
const router = express.Router();

router.route('/')
    .get(getComments)
    .post(createComment)


router.route('/:id')
    .put(updateComment)
    .delete(deleteComment)
    .get(getComment)

module.exports = router;