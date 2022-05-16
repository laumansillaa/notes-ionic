const {Notes, Alumns} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('----- GET ALL NOTES -----');

    try {

        const allNotes = await Notes.findAll({
            include: Alumns
        })

        if (allNotes) {

            res.status(200).send(allNotes)

        } else {
            res.status(404).send('No notes found')
        }

    } catch (error) {
        next(error)
    }
}