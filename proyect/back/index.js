const server = require('./src/app.js');
const db = require('./src/db.js');


db.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log('is listening at 3001')
    })
})