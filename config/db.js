// //Require mongoose
// const mongoose = require('mongoose');



// //Connect to DB
// const connectDB = () => {
//     try { 
//       mongoose.connect(process.env.CONNECTION_STRING, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       });
//       console.log('DB - connected')
//     } catch (err) {
//       console.log('error occurred while tring to connect to DB', err);
//       throw err;
//     }
//   };

// module.exports = connectDB