const { model, Schema } = require('mongoose')

const entrySchema = new Schema({
    title: {required: true, type: String},
    category: { required: false, type: String},
    image: { required: false, type: String},
    body: { required: false, type: String}
}, {
    timestamps: true
})

const Entry = model('Entry', entrySchema)

module.exports = Entry;