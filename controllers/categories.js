const mongoose = require('mongoose');
const Categories = require('../models/Categories');

const findAllCategories = (req, res) => {
	Categories.find((err, cats) => {
		err && res.status(500).send(err.message);

		let DataCategories = {'categories': cats}
		console.log(DataCategories)
		res.status(200).Promise.all(DataCategories);
	});
}

// const prodById = (req, res) => {
// 	Categories.findById(req.params.id, (err, cat) => {
// 		err && res.status(500).send(err.message);

// 		res.status(200).json(prod);
// 	});
// }

const addCategory = async(req, res) => {
	const category = new Categories({
		id: req.query.id,
		title: req.query.title,
		icon: req.query.icon,
		background: req.query.background
	}); 

	await category.save((err, prd) => {
		err && res.status(500).send(err.message);

		res.status(200).json(prd);
	});
};

module.exports = { findAllCategories, addCategory };