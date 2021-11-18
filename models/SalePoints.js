const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalePointSchema = new Schema({
	images: [{ type: String }],
	name: { type: String },
	address: { type: String },
	postalCode: { type: String },
	phone: { type: String },
	horary: { type: String }
});

module.exports = SalePoints = mongoose.model("SalePoints", SalePointSchema);