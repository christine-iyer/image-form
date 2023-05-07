const router = require('express').Router()
const entryCtrl = require('../../controllers/api/entrys')

/* /api/entrys/:id
DELETE 
destroy entry
*/
router.delete('/:id',  entryCtrl.destroy, entryCtrl.jsonEntry)
/*
/api/entrys/:id
PUT
update entry
*/
router.put('/:id',  entryCtrl.update, entryCtrl.jsonEntry)
/*
/api/entrys
POST
create entry
*/
router.post('/',  entryCtrl.create, entryCtrl.jsonEntrys)

module.exports = router