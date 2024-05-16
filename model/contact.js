module.exports = (sequelize, DataTypes, Model) => {

    class Contact extends Model { }

    Contact.init({
        // Model attributes are defined here
        permanentAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentAddress: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },

    }, {
        // Other model options go here
        sequelize,
        tableName: 'contacts',
    },)

    // `sequelize.define` also returns the model
    // console.log(Contact === sequelize.models.Contact); // true

    return Contact;
}