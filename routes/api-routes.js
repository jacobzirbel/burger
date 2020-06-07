const db = require("../models");

module.exports = (app) => {
	app.put("/api/eat/:id", (req, res) => {
		db.Burger.update({ eaten: true }, { where: { id: req.params.id } }).then(
			(data) => {
				res.end();
			}
		);
	});
	app.post("/api/add", (req, res) => {
		db.Burger.create({ name: req.body.newBurger, eaten: false }).then(
			(data) => {
				res.end();
			}
		);
	});
};
