const {Alumns} = require('../../db').models;

module.exports = async (req, res, next) => {
    console.log('----- ADD ALUMN -----');

    try {

        const {name, lastname, phone, observations} = req.body;

        if (!name) {
            res.status(404).send('Name is required');
        } else {

            const addAlumn = await Alumns.create({
                name,
                lastname,
                phone,
                observations
            });

            res.status(200).send(addAlumn);

        }
        

    } catch (error) {
        next(error)
    }




}