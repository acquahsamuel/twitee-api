const express = require("express");
const Twitee = require("../models/Twitee");
const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const {
    getTwitees,
    getTwitee,
    createTwitee,
    updateTwitee,
    deleteTwitee,
} = require("../controllers/twitees");
const router = express.Router();

router.route("/")
    .get(advancedResults(Twitee), getTwitees)
    .post(createTwitee);

router.route("/:id")
    .get(getTwitee)
    .put(updateTwitee)
    .delete(deleteTwitee);

module.exports = router;