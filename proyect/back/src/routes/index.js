module.exports = function (app) {
    app.use('/notes', require('./Notes'));
}