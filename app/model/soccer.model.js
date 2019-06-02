module.exports = (sequelize, Sequelize) => {
	const Soccer = sequelize.define('soccer', {
		nationality: {
			type: Sequelize.STRING
		},
		name: {
			type: Sequelize.STRING
		},
		team: {
			type: Sequelize.INTEGER
		},
		point:{
			type: Sequelize.INTEGER
		}
	});

	return Soccer;
}