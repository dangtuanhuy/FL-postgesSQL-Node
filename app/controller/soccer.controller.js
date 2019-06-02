const db = require('../config/db.config.js');
const Soccer = db.soccers;

// Post a Soccer
exports.create = (req, res) => {
	// Save to PostgreSQL database
	Soccer.create({
		"nationality": req.body.nationality,
		"name": req.body.name,
		"team": req.body.team,
		"point": req.body.point
	}).then(soccer => {
		// Send created soccer to client
		res.json(soccer);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// FETCH All Soccer
exports.findAll = (req, res) => {
	Soccer.findAll().then(soccers => {
		// Send All Soccer to Client
		res.json(soccers.sort(function (c1, c2) { return c1.id - c2.id }));
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// Find a Soccer by Id
exports.findById = (req, res) => {
	Soccer.findById(req.params.id).then(soccer => {
		res.json(soccer);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};
// Update a Soccer
exports.update = (req, res) => {
	const id = req.body.id;
	Soccer.update(req.body,
		{ where: { id: id } }).then(() => {
			res.status(200).json({ mgs: "Updated Successfully -> Soccer Id = " + id });
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};

// Delete a Soccer by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Soccer.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).json({ msg: 'Deleted Successfully -> Soccer Id = ' + id });
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};