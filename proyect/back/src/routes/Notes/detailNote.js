const {Notes, Alumns} = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- DETAIL NOTE -----');

    const {id} = req.params;
    //console.log('SOY LA NOTA', id)
    try {

        if (id) {
            
            const noteId = await Notes.findByPk(id,{
                include: Alumns
            })

            res.status(200).send(noteId)

        } else {
            res.status(404).send('Id is required')
        }

    } catch (error) {
        next(error)
    }


}