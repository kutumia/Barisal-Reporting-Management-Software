module.exports = (sequelize, Sequelize) => {
    const cropList = sequelize.define("cropList", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: Sequelize.STRING
        },
        parent_id: {
            type: Sequelize.INTEGER
        },
        type: {
            type: Sequelize.STRING
        }
    });

    return cropList;
};