module.exports = (sequelize, Sequelize) => {
    const producedCrop = sequelize.define("producedCrop", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      crop: {
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
      year: {
        type: Sequelize.STRING
      },
      // areaShotero: {
      //   type: Sequelize.STRING
      // },
      // productionShotero: {
      //   type: Sequelize.STRING
      // },
      // seasonShotero: {
      //   type: Sequelize.STRING
      // },
      // areaAtharo: {
      //   type: Sequelize.STRING
      // },
      // productionAtharo: {
      //   type: Sequelize.STRING
      // },
      // seasonAtharo: {
      //   type: Sequelize.STRING
      // },
      // areaUnish: {
      //   type: Sequelize.STRING
      // },
      // productionUnish: {
      //   type: Sequelize.STRING
      // },
      // seasonUnish: {
      //   type: Sequelize.STRING
      // },
      // areaBish: {
      //   type: Sequelize.STRING
      // },
      // productionBish: {
      //   type: Sequelize.STRING
      // },
      // seasonBish: {
      //   type: Sequelize.STRING
      // },
      // areaEkush: {
      //   type: Sequelize.STRING
      // },
      // productionEkush: {
      //   type: Sequelize.STRING
      // },
      // seasonEkush: {
      //   type: Sequelize.STRING
      // },
      // areaBaish: {
      //   type: Sequelize.STRING
      // },
      // productionBaish: {
      //   type: Sequelize.STRING
      // },
      // seasonBaish: {
      //   type: Sequelize.STRING
      // },
      upazilla_id: {
        type: Sequelize.INTEGER
      },
      saao_id: {
        type: Sequelize.INTEGER
      },
    });
  
    return producedCrop;
  };