const mongoose = require('mongoose');
const UserModel = require('../models/User');

const findAllUsers = (req, res) => {
	UserModel.find((err, points) => {
		err && res.status(500).send(err.message);

		let salePts = {'salepoints': points}
		res.status(200).json(salePts);
	});
}

const validateUserLogin = (req, res) => {

	let findVar = {
		email: req.query.email,
		password: req.query.password
	}

	UserModel.find( findVar , (err, tokn) => {
		err && res.status(500).send(err.message);

		res.status(200).json(tokn)
	})
}

// const salePointById = (req, res) => {
// 	UserModel.findById(req.params.id, (err, cat) => {
// 		err && res.status(500).send(err.message);

// 		res.status(200).json(prod);
// 	});
// }

const addUser = async(req, res) => {
	const userSignup = new UserModel({
		firstName: req.query.firstName,
		lastName: req.query.secondName,
		email: req.query.email,
		phone: req.query.phone,
		password: req.query.password
	}); 

	await userSignup.save((err, usr) => {
		err && res.status(500).send(err.message);

		res.status(200).json(usr._id);
	});
};

module.exports = { findAllUsers, addUser, validateUserLogin };