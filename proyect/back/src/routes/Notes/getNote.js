const {Notes} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('----- GET ALL NOTES -----');

    try {

        const allNotes = await Notes.findAll()

        if (allNotes) {

            res.status(202).send(allNotes)

        } else {
            res.status(404).send('No notes found')
        }


    } catch (error) {
        next(error)
    }
}