const mongoose = require('mongoose');
const Categories = require('../models/Categories');
const Products = require('../models/Products');
const SalePoints = require('../models/SalePoints');
const Offerts = require('../models/Offerts');

const FindContentHome = async (req, res) => {

	const FindData = {
		categories: await Categories.find().lean().exec(),
		products: await Products.find().lean().exec(),
		salepoints: await SalePoints.find().lean().exec()
	}

	res.status(200).json(FindData);


	// Categories.find((err, cats) => {
	// 	err && res.status(500).send(err.message);

	// 	let DataCategories = {'categories': cats}
	// 	console.log(res.status(500));
	// 	//res.status(200)((req, res) => { console.log(req)});
	// });

	// Products.find((err, prods) => {
	// 	err && res.status(500).send(err.message);

	// 	let DataCategories = {'products': prods }
	// 	res.status(200).json(DataCategories);
	// });

}

module.exports = { FindContentHome };