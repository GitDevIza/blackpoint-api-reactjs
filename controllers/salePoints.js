const mongoose = require('mongoose');
const SalePoints = require('../models/SalePoints');

const findAllSalePoints = (req, res) => {
	SalePoints.find((err, points) => {
		err && res.status(500).send(err.message);

		let salePts = {'salepoints': points}
		res.status(200).json(salePts);
	});
}

const salePointById = (req, res) => {
	SalePoints.findById(req.params.id, (err, cat) => {
		err && res.status(500).send(err.message);

		res.status(200).json(prod);
	});
}

const addSalePoint = async(req, res) => {
	const slePoint = new SalePoints({
		images: req.query.images,
		name: req.query.name,
		address: req.query.address,
		postalCode: req.query.postcode,
		phone: req.query.phone,
		horary: req.query.horary
	}); 

	await slePoint.save((err, pnt) => {
		err && res.status(500).send(err.message);

		res.status(200).json(pnt);
	});
};

module.exports = { findAllSalePoints, salePointById, addSalePoint };