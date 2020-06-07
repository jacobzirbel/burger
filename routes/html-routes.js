const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
	db.Burger.findAll().then((data) => {
		res.render("index", { burgers: data });
	});
});

module.exports = router;
