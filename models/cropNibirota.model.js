module.exports = (sequelize, Sequelize) => {
    const cropNibirota = sequelize.define("cropNibirota", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      fosholi: {
        type: Sequelize.STRING
      },
      abadjoggo: {
        type: Sequelize.STRING
      },
      abadi: {
        type: Sequelize.STRING
      },
      ek: {
        type: Sequelize.STRING
      },
      dui: {
        type: Sequelize.STRING
      },
      tin: {
        type: Sequelize.STRING
      },
      kharif2: {
        type: Sequelize.STRING
      },
      robi: {
        type: Sequelize.STRING
      },
      kharif1: {
        type: Sequelize.STRING
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