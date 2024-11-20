const mongoose = require("mongoose");
require("dotenv").config();

// const dbConnection = mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

const mongoURI = process.env.DB_HOST;

const dbConnection = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 30000,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
  }
};

module.exports = dbConnection;
