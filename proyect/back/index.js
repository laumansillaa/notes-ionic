const server = require('./src/app.js');
const db = require('./src/db.js');

const {Notes} = require("./src/db.js").models


db.sync({force: true}).then(async () => {

    const note = await Notes.create({
        title: "Note 1, prueba de jasmine",
        description: "Description, prueba de jasmine"
    })

    const noteUno = await Notes.create({
    title: "Note 2, prueba de jasmine",
    description: "Description, prueba de jasmine"
    })

    const noteDos = await Notes.create({
        title: "Note 3, prueba de jasmine",
        description: "Description, prueba de jasmine"
    })


    server.listen(3001, () => {
        console.log('is listening at 3001')
    })
})