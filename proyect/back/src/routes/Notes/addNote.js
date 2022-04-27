const {Notes} = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- ADD NOTE -----');

    const {title, description} = req.body;

    try {
        
        if(!title && !description) {
            
            res.status(404).send('title and description are required');
        } else {

            const note = await Notes.create({
                title,
                description
            })

            res.status(202).send(note)
        }
    } catch (error) {
        next(error)
    }
}