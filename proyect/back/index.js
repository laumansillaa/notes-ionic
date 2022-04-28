const server = require('./src/app.js');
const db = require('./src/db.js');

const {Notes} = require("./src/db.js").models


db.sync({force: true}).then(async () => {

    const note = await Notes.create({
        title: "Note, prueba de jasmine",
        description: "Description, prueba de jasmine"
    })

    server.listen(3001, () => {
        console.log('is listening at 3001')
    })
})