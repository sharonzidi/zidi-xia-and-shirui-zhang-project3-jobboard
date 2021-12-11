const mongoose = require("mongoose")
const UserSchema = require('../schema/User.Schema').UserSchema
const UserModel = mongoose.model("User", UserSchema);

function insertUser(user) {
    return UserModel.create(user);
}

function getAllUsers() {
    return UserModel.find().exec();
}

function findUserByUsername(username) {
    return UserModel.findOne({username}).exec();
}

function updateUserByName(username, data) {
    return UserModel.updateOne({username: username}, {$set: data}).exec();
}

// Make sure to export a function after you create it!
module.exports = {
    insertUser,
    getAllUsers,
    findUserByUsername,
    updateUserByName,
};
