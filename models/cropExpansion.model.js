module.exports = (sequelize, Sequelize) => {
    const cropExpansion = sequelize.define("cropExpansion", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      aushAbadi: {
        type: Sequelize.INTEGER
      },
      aushUtpadon: {
        type: Sequelize.INTEGER
      },
      amanAbadi: {
        type: Sequelize.INTEGER
      },
      amanUtpadon: {
        type: Sequelize.INTEGER
      },
      boroAbadi: {
        type: Sequelize.INTEGER
      },
      boroUtpadon: {
        type: Sequelize.INTEGER
      },
      hybridAbadi: {
        type: Sequelize.INTEGER
      },
      hybridUtpadon: {
        type: Sequelize.INTEGER
      },
      gomAbadi: {
        type: Sequelize.INTEGER
      },
      gomUtpadon: {
        type: Sequelize.INTEGER
      },
      vuttaAbadi: {
        type: Sequelize.INTEGER
      },
      vuttaUtpadon: {
        type: Sequelize.INTEGER
      },
      barliAbadi: {
        type: Sequelize.INTEGER
      },
      barliUtpadon: {
        type: Sequelize.INTEGER
      },
      patAbadi: {
        type: Sequelize.INTEGER
      },
      patUtpadon: {
        type: Sequelize.INTEGER
      },
      mugAbadi: {
        type: Sequelize.INTEGER
      },
      mugUtpadon: {
        type: Sequelize.INTEGER
      },
      kheshariAbadi: {
        type: Sequelize.INTEGER
      },
      kheshariUtpadon: {
        type: Sequelize.INTEGER
      },

      felonAbadi: {
        type: Sequelize.INTEGER
      },
      
      felonUtpadon: {
        type: Sequelize.INTEGER
      },

      shorishaAbadi: {
        type: Sequelize.INTEGER
      },
      shorishaUtpadon: {
        type: Sequelize.INTEGER
      },
      tilAbadi: {
        type: Sequelize.INTEGER
      },
      tilUtpadon: {
        type: Sequelize.INTEGER
      },
      soyabeanAbadi: {
        type: Sequelize.INTEGER
      },
      soyabeanUtpadon: {
        type: Sequelize.INTEGER
      },
      chinabadamAbadi: {
        type: Sequelize.INTEGER
      },
      chinabadamUtpadon: {
        type: Sequelize.INTEGER
      },
      surjomukhiAbadi: {
        type: Sequelize.INTEGER
      },
      surjomukhiUtpadon: {
        type: Sequelize.INTEGER
      },
      piyajAbadi: {
        type: Sequelize.INTEGER
      },
      piyajUtpadon: {
        type: Sequelize.INTEGER
      },

      roshunAbadi: {
        type: Sequelize.INTEGER
      },
      roshunUtpadon: {
        type: Sequelize.INTEGER
      },
      holudAbadi: {
        type: Sequelize.INTEGER
      },
      holudUtpadon: {
        type: Sequelize.INTEGER
      },
      aluAbadi: {
        type: Sequelize.INTEGER
      },
      aluUtpadon: {
        type: Sequelize.INTEGER
      },
      begunAbadi: {
        type: Sequelize.INTEGER
      },
      begunUtpadon: {
        type: Sequelize.INTEGER
      },
      tomatoAbadi: {
        type: Sequelize.INTEGER
      },
      tomatoUtpadon: {
        type: Sequelize.INTEGER
      },
      dheroshAbadi: {
        type: Sequelize.INTEGER
      },
      dheroshUtpadon: {
        type: Sequelize.INTEGER
      },
      puishakAbadi: {
        type: Sequelize.INTEGER
      },
      puishakUtpadon: {
        type: Sequelize.INTEGER
      },
      kumraAbadi: {
        type: Sequelize.INTEGER
      },
      kumraUtpadon: {
        type: Sequelize.INTEGER
      },

      simAbadi: {
        type: Sequelize.INTEGER
      },
      simUtpadon: {
        type: Sequelize.INTEGER
      },
      amAbadi: {
        type: Sequelize.INTEGER
      },
      amUtpadon: {
        type: Sequelize.INTEGER
      },
      peyaraAbadi: {
        type: Sequelize.INTEGER
      },
      peyaraUtpadon: {
        type: Sequelize.INTEGER
      },
      kolaAbadi: {
        type: Sequelize.INTEGER
      },
      kolaUtpadon: {
        type: Sequelize.INTEGER
      },
      pepeAbadi: {
        type: Sequelize.INTEGER
      },
      pepeUtpadon: {
        type: Sequelize.INTEGER
      },
      sofedaAbadi: {
        type: Sequelize.INTEGER
      },
      sofedaUtpadon: {
        type: Sequelize.INTEGER
      },
      maltaAbadi: {
        type: Sequelize.INTEGER
      },
      maltaUtpadon: {
        type: Sequelize.INTEGER
      },
      kulAbadi: {
        type: Sequelize.INTEGER
      },
      kulUtpadon: {
        type: Sequelize.INTEGER
      },
      tormujAbadi: {
        type: Sequelize.INTEGER
      },
      tormujUtpadon: {
        type: Sequelize.INTEGER
      },
            
      year: {
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