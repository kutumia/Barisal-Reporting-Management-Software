module.exports = (sequelize, Sequelize) => {
    const saao = sequelize.define("saao", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      village: {
        type: Sequelize.STRING
      },
      field: {
        type: Sequelize.STRING
      },
      block: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      saao: {
        type: Sequelize.STRING
      },
      uname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      },
      dd_id: {
        type: Sequelize.INTEGER
      },
      pd_id: {
        type: Sequelize.INTEGER
      }
      
      
    });
  
    return saao;
  };