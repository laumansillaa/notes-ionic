const {Notes} = require('../../db').models


module.exports = async function (req, res, next) {
    console.log('----- UPDATE NOTE -----');

    const {id} = req.params;
    const {title, description} = req.body;

    try {

        if (!id) {

            res.status(404).send('Id is required')

        } else {

            const updateNote = await Notes.update({            
                title: title,
                description: description
            }, {
                where: {
                    id: id
                }
            })

            res.status(202).send('updateNote Successfully')
        }
    


    } catch (error){
        next(error)
    }

}