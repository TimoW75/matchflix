const mongoose = require("mongoose");

//Define a schema
const userSchema = new mongoose.Schema({
	name:{
		type: String,
	},
	age: {
		type: Number,
	},
    gender: {
        type: String,
    },
    email: {
        type: String,
		required: true,
		unique: true,
    },
    password: {
        type: String,
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