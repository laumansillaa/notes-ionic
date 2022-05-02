const server = require('./src/app.js');
const db = require('./src/db.js');

const {Notes} = require("./src/db.js").models


db.sync({force: true}).then(async () => {

    const note = await Notes.create({
        title: "Note 1, titulo default.",
        description: "Description, nota de prueba.",
    })

    const noteUno = await Notes.create({
    title: "Note 2, titulo default",
    description: "Description, nota de prueba."
    })

    const noteDos = await Notes.create({
        title: "Note 3, titulo default",
        description: "Description, nota de prueba."
    })


    server.listen(3001, () => {
        console.log('is listening at 3001')
    })
})