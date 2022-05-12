module.exports = function(sequelize) {
    require('./Notes')(sequelize);
    require('./Alumns')(sequelize);


    const {Notes, Alumns} = sequelize.models;

    Alumns.belongsToMany(Notes, {through: 'Alumns_Notes'});
    

}