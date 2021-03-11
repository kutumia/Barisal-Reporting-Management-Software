module.exports = (sequelize, Sequelize) => {
    const cropNibirota = sequelize.define("cropnibirota", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      abadjoggo: {
        type: Sequelize.STRING
      },
      k21: {
        type: Sequelize.INTEGER
      },
      k22: {
        type: Sequelize.INTEGER
      },
      r1: {
        type: Sequelize.INTEGER
      },
      r2: {
        type: Sequelize.INTEGER
      },
      k11: {
        type: Sequelize.INTEGER
      },
      k12: {
        type: Sequelize.INTEGER
      },
      irrigation: {
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
  
    return cropNibirota;
  };