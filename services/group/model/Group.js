const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('group',schema);
