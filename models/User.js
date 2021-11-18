const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschemma = new Schema({
	firstName: { type: String },
	lastName: { type: String },
	email: {type: String},
	password: { type:String },
	phone: { type: String },
});

// icon: { type: String },
// sendPoint: [{ type: String }],

// const UserAddress = new Schema({
// 	address: {type: String},
// 	distric: {type: String},
// 	postalCode: {type: String},
// 	Cart: {type: String}
// })

module.exports = UserModel = mongoose.model("UserModel", Userschemma);