const {returnChallenge} = require('../controllers/challenge');
const { webHook } = require('../controllers/webhook');

const router = require("express").Router();

router.get("/",returnChallenge);
router.post("/",webHook);

module.exports = router;