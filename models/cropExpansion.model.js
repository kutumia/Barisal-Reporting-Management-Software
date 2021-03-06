module.exports = (sequelize, Sequelize) => {
  const cropExpansion = sequelize.define("cropexpansion", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    crop: {
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
    productionShotero: {
      type: Sequelize.STRING
    },
    productionAtharo: {
      type: Sequelize.STRING
    },
    productionUnish: {
      type: Sequelize.STRING
    },
    productionBish: {
      type: Sequelize.STRING
    },
    productionEkush: {
      type: Sequelize.STRING
    },
    productionBaish: {
      type: Sequelize.STRING
    },
    upazilla_id: {
      type: Sequelize.INTEGER
    },
    dd_id: {
      type: Sequelize.INTEGER
    }
  });

  return cropExpansion;
};