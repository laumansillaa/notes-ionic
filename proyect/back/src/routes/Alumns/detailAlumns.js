const {Alumns, Notes} = require('../../db').models;


module.exports = async (req, res, next) => {

    console.log('----- DETAIL ALUMN -----');


    try {

        const {id} = req.params;
        
        if (!id) {

            res.status(404).send('Id is requerid')
        } else {

            const alumn = await Alumns.findOne({
                where: {
                    id: id
                }
            }, {
                include: Notes
                }
            )
    
            res.status(200).send(alumn)

        }


    } catch (error) {
        next(error)
    }

}