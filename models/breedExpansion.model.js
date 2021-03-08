module.exports = (sequelize, Sequelize) => {
    const breedExpansion = sequelize.define("breedExpansion", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      bname: {
        type: Sequelize.STRING
      },
      areaShotero: {
        type: Sequelize.INTEGER
      },
      areaAtharo: {
        type: Sequelize.INTEGER
      },
      areaUnish: {
        type: Sequelize.INTEGER
      },
      areaBish: {
        type: Sequelize.INTEGER
      },
      areaEkush: {
        type: Sequelize.INTEGER
      },
      areaBaish: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return breedExpansion;
  };