const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdSchema = new Schema({
	images: [{ type: String }],
	name: { type: String },
	description: { type: String },
	category: { type: String },
	offerts: [{ type: String }],
	price: { type: String },
	unit: { type: String }
});

module.exports = Products = mongoose.model('Products', ProdSchema);