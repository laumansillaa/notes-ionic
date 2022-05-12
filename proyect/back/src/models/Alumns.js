const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Alumns',{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        observations: {
            type: DataTypes.TEXT
        }
    })
}