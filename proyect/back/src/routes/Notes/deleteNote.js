const {Notes} = require('../../db').models;


module.exports = async function (req, res, next) {
    console.log('----- DELETE NOTE -----');

    const {id} = req.params;

    try {

        if (!id) {
                
                res.status(404).send('Id is required')
    
        } else {
                                
                const deleteNote = await Notes.destroy({
                    where: {
                        id: id
                    }
                })
        
                res.status(202).send('deleteNote Successfully')         
        }

    } catch (error) {
        next(error)
    }


}