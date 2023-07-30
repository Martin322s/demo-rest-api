const Furniture = require('../models/Furniture');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../../config/constants');
const jwtVerify = promisify(jwt.verify);

exports.getAll = async () => await Furniture.find();
exports.createFurniture = async (adData) => await Furniture.create(adData);
exports.decodeTokenService = async (token) => await jwtVerify(token, SECRET);