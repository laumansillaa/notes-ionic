const {Alumns} = require('../../db').models;
const { Op } = require ('sequelize');

module.exports = async (req, res, next) => {
    console.log('----- GET ALL ALUMNS -----');

    const {name} = req.query

    try {

        if (name) {

            try {
                const opAlumns = await Alumns.findAll({
                    where: {
                        name: {[Op.iLike] : `%${name}%`}
                    }
                })

                res.status(200).send(opAlumns)
            } catch (error) {
                next(error)
            }   
        } else {

            try {
                const allAlumns = await Alumns.findAll()

                res.status(200).send(allAlumns)


            } catch (error) {
                next(eror)
            }

        }            

    } catch (error) {
        next(error)
    }

}