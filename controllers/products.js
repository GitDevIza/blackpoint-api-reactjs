const mongoose = require('mongoose');
const Products = require('../models/Products');

const findAllProd = (req, res) => {
	Products.find((err, prods) => {
		err && res.status(500).send(err.message);

		res.status(200).json(prods);
	});
}

const prodById = (req, res) => {
	Products.findById(req.params.id, (err, prod) => {
		err && res.status(500).send(err.message);

		res.status(200).json(prod);
	});
}

const addProd = async(req, res) => {
	const prod = new Products({
		images: req.query.images,
		name: req.query.name,
		description: req.query.description,
		category: req.query.category,
		offerts: req.query.offerts,
		price: req.query.price,
		unit: req.query.unit
		// name: req.query.name,
		// username: req.query.username,
		// password: req.query.password
	}); 

	await prod.save((err, prd) => {
		err && res.status(500).send(err.message);

		res.status(200).json(prd);
	});
};

module.exports = { findAllProd, prodById, addProd };