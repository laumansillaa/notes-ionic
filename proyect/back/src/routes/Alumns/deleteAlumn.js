const {Alumns} = require('../../db').models;



module.exports = async (req, res, next) => {
    console.log('----- DELETE ALUMN -----');

    const {id} = req.params;

    try {

        if (!id) {
            
            res.status(404).send('Id is required')
        } else {

            const deleteAlumn = await Alumns.destroy({
                where:{
                    id: id
                }
            })

            res.status(200).send('deleteAlumn Successfully')

        }

    } catch (error) {
        next(error)
    }

}