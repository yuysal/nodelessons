const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{name:String,
        email:String,
        phone:Number,
        city:String,
        country:String,
        itemsSold:Array,
        jobProfile: String,
        additionalInfo: String,
        isActive: Boolean
	}, 
	{ timestamps: true }
	);
schema.method("toJSON", function() {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
	});
const Customer = mongoose.model("customer", schema);  /* customer should be the same name of your database collection but just single not plural*/

module.exports = Customer;
