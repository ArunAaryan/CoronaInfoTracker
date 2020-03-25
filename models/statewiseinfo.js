const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    sno:{
        type:Number,
    },
    State:{
        type:String,
        required:true
    },
    Confirmed:{
        type:String,
        default:"Not Updated"
    },
    Deaths:{
        type:String,
        default:"Not Updated"
    }

})

const StateWiseInfo = mongoose.model('StateWiseInfo',UserSchema);
module.exports = StateWiseInfo;