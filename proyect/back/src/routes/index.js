module.exports = function (app) {
    app.use('/notes', require('./Notes'));
    app.use('/alumns', require('./Alumns'));
}