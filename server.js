const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
const routes = require("./routes/html-routes");
app.use(routes);
db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`On port ${PORT}`);
	});
});
