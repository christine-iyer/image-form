require('dotenv').config()
const Entry  = require('../../models/entry.js');

module.exports = {
    create,
    show,
    update,
    destroy,
    jsonEntrys,
    jsonEntry
}


// jsonEntrys, jsonEntry

function jsonEntry (req, res){
    res.json(res.locals.data.entry)
}

function jsonEntrys (req, res){
    res.json(res.locals.data.entrys)
}


// create
async function create(req, res, next){
    try {
        const entry = await Entry.create(req.body)
        console.log(entry)
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })        
    }
}


// read - index, show

async function show(req, res, next){
    try {
        const entry = await Entry.findById(req.params.id)
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}



// update

async function update(req, res, next){
    try {
        const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}


// destroy

async function destroy(req, res, next){
    try {
        const entry = await Entry.findByIdAndDelete(req.params.id)
        res.locals.data.entry = entry
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}