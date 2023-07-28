const mongoose = require('mongoose');

const databaseConnection = () => mongoose.connect('mongodb://127.0.0.1:27017/Furniture');

module.exports = databaseConnection;