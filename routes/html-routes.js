const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
	db.Burger.findAll().then((data) => {
		console.log(data.map((e) => e.dataValues));
		res.render("index", { burgers: data.map((e) => e.dataValues) });
	});
});

module.exports = router;
