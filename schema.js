const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    mobno: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    department:{
        type:String,
        required:true
    },
    hallnum:{
        type:String,
        required:true
    }
});
const hallSchema = new mongoose.Schema({
    hallnum:{
        type:String,
        required:true
    },
    loaction: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    facultyid: {
        type:String,
        required:true
    }
});
const adminSchema= new mongoose.Schema({
    facultyid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobno: {
        type: Number,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
})

const Hall = mongoose.model('Hall', hallSchema);
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin',adminSchema)

module.exports = { Hall, User, Admin };   