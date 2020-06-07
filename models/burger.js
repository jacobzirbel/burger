module.exports = (sequelize, DataTypes) => {
	let Burger = sequelize.define("Burger", {
		name: DataTypes.STRING,
		eaten: DataTypes.BOOLEAN,
	});
	return Burger;
};
