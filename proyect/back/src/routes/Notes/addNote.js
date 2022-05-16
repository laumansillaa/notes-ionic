const {Notes, Alumns} = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- ADD NOTE -----');

    //const {id} = req.params;
    const {title, description, lastname} = req.body;

    try {

        if (!title && !description) {
            res.send(404).send('No se han recibido datos para guardar')
        } else {

            if  (title && description) {
    
                let note = await Notes.create({
                    title,
                    description,
                })
        
                const match = await Alumns.findAll({
                    where: {
                        lastname: lastname
                    }
                })
        
                note.addAlumns(match)
        
                res.status(200).send(note)
            } else if (!title && description) {
    
                let note = await Notes.create({
                    title: "New note"
                })
    
                const match = await Alumns.findAll({
                    where: {
                        lastname: lastname  
                    }
                })
    
                note.addAlumns(match)
    
                res.status(200).send(note)
            } 
        }


    } catch (error) {
        next(error)
    }
}