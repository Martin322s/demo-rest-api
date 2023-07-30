const Furniture = require('../models/Furniture');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../../config/constants');
const jwtVerify = promisify(jwt.verify);

exports.getAll = async () => await Furniture.find();
exports.getOne = async (id) => await Furniture.findById({ _id: id });
exports.createFurniture = async (adData) => await Furniture.create(adData);
exports.decodeTokenService = async (token) => await jwtVerify(token, SECRET);
exports.editFurniture = async (id, data) => await Furniture.findByIdAndUpdate(id, data);
exports.deleteFurniture = async (id) => await Furniture.findByIdAndDelete(id);
exports.myFurnitures = async (id) => await Furniture.find({ _ownerId: id });