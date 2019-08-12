
module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        technologies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactEmail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        // define: {
        //     //prevent sequelize from pluralizing table names
        //     freezeTableName: true
        // }
    });




    return Job;
}

