const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    UpdatedLast:{
        type:Date,
        default:Date.now
    },
    Confirmed:{
        type:String,
        required:true
    },
    NewCases:{
        type:String,
        required:true
    },
    Deaths:{
        type:String,
        required:true
    },
    Recovered:{
        type:String,
        required:true
    }
})
const MainInfo = mongoose.model('MainInfo',UserSchema);
module.exports = MainInfo;