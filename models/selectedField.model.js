module.exports = (sequelize, Sequelize) => {
    const selectedField = sequelize.define("selectedfield", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      fname: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      robi1: {
        type: Sequelize.STRING
      },
      robi2: {
        type: Sequelize.STRING
      },
      robi3: {
        type: Sequelize.STRING
      },
      robi4: {
        type: Sequelize.STRING
      },
      robi5: {
        type: Sequelize.STRING
      },
      robi6: {
        type: Sequelize.STRING
      },
      kharif1_1: {
        type: Sequelize.STRING
      },
      kharif1_2: {
        type: Sequelize.STRING
      },
      kharif1_3: {
        type: Sequelize.STRING
      },
      kharif2_1: {
        type: Sequelize.STRING
      },
      kharif2_2: {
        type: Sequelize.STRING
      },
      kharif2_3: {
        type: Sequelize.STRING
      },
      irrigation: {
        type: Sequelize.STRING
      },
      groups: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      },
      saao_id: {
        type: Sequelize.INTEGER
      },
    });
  
    return selectedField;
  };