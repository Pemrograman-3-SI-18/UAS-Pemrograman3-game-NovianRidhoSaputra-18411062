const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    kodeGame: {
        type: String
    },
    namagame:{
        type: String
    },
    developer:{
        type: String
    },
    tahunterbit:{
        type: String
    },
    hargagame:{
        type: String
    },
    gambar:{
        type: String
    }
})

module.exports = mongoose.model('game', userSchema)
