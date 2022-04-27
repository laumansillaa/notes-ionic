const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Notes', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
    })
}