const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffertSchema = new Schema({
	initDate: { type: String },
	endDate: { type: String },
	porcent: { type: String },
	price: { type: String },
	image: { type: String },
});

module.exports = Offerts = mongoose.model("Offerts", OffertSchema);