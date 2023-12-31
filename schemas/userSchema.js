const { model, Schema } = require('mongoose');

module.exports = model('userSchema',
    new Schema({
        userID: {
            type: Number,
            required: true
        }
    })
);