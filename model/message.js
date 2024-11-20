const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    recieverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Anonymous',
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    timestamp:{
        type: Date,
        default: Date.now()
    }
})

const Message = mongoose.model('Message', messageSchema)

module.exports=Message;