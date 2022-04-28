const {Notes} = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- ADD NOTE -----');

    const {title, description} = req.body;

    try {
        
        if(!title && !description) {
            
            return res.status(404).send('title and description are required');
        } 
        
        if(!title) {
            
            const newNote = await Notes.create({
                title: "New note",
                description
            })

            return res.status(200).send(newNote)
        } else {
                
                const note = await Notes.create({
                    title,
                    description
                })
    
                return res.status(200).send(note)
        }
    } catch (error) {
        next(error)
    }
}