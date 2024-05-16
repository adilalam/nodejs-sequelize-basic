module.exports = (sequelize, DataTypes, Model) => {

    class User extends Model { }

    User.init({
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        sequelize,
        tableName: 'users',
    })

    // `sequelize.define` also returns the model
    // console.log(User === sequelize.models.User); // true

    return User;
}
