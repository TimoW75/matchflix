const mongoose = require("mongoose");

//Define a schema
const userSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
    gender: {
        type: String,
		enum: {
			values: ['Man', 'Woman', 'Other'],
			message: '{VALUE} is not a valid gender'
		}
    },
    email: {
        type: String,
		required: true,
		unique: true,
    },
    password: {
        type: String,
		required: true,
    },
	about:{
		type: String
	},
	shows:[{       
			type: String
		}],	
	matches:[{
		type: mongoose.Schema.Types.ObjectId
	}]
});


//compile schema into model
module.exports = mongoose.model("User", userSchema); 