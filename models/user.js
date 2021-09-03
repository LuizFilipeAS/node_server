const mongoose = require('mongoose');
const { Schema } = mongoose; // equivale a const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);