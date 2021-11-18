const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorSchema = new Schema({
	id: {type: String},
	title: { type: String },
	icon: { type: String },
	background: { type: String }
});

module.exports = Categories = mongoose.model("Categories", CategorSchema);