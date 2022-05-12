const {Alumns} = require('../../db').models;


module.exports = async (req, res, next) => {
    console.log('----- UPDATE ALUMN -----');
    
    const {id} = req.params;
    const {name, lastname, phone, observations} = req.body;

    try {

        if (!id) {

            res.status(404).send('Id is required')
        } else {
            
            const updateAlumn = await Alumns.update({
                name: name,
                lastname: lastname,
                phone: phone,
                observations: observations
            }, {
                where:{
                    id: id
                }
            })
            
            res.status(200).send('updateAlumn Successfully')
        }

    } catch (error) {
        next(error)
    }

}