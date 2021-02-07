const mongoose= require('mongoose')

const bookschema = new mongoose.Schema({
    book_name:{ 
        type:String,
        required: true
    },
    book_type:{
        type: String,
        required: true
    },
    sub: {
        type:Boolean,
        required: true
    }

    
})

module.exports = mongoose.model('book',bookschema)
