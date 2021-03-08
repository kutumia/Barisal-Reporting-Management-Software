module.exports = (sequelize, Sequelize) => {
    const technologyExpansion = sequelize.define("technologyExpansion", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      technology: {
        type: Sequelize.STRING
      },
      userShotero: {
        type: Sequelize.STRING
      },
      userAtharo: {
        type: Sequelize.STRING
      },
      userUnish: {
        type: Sequelize.STRING
      },
      userBish: {
        type: Sequelize.STRING
      },
      userEkush: {
        type: Sequelize.STRING
      },
      userBaish: {
        type: Sequelize.STRING
      },
      areaShotero: {
        type: Sequelize.STRING
      },
      areaAtharo: {
        type: Sequelize.STRING
      },
      areaUnish: {
        type: Sequelize.STRING
      },
      areaBish: {
        type: Sequelize.STRING
      },
      areaEkush: {
        type: Sequelize.STRING
      },
      areaBaish: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      },
      dd_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return technologyExpansion;
  };