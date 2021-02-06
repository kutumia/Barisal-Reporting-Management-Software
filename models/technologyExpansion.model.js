module.exports = (sequelize, Sequelize) => {
    const technologyExpansion = sequelize.define("technologyExpansion", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      adorshoBijUser: {
        type: Sequelize.INTEGER
      },
      adorshoBijLand: {
        type: Sequelize.INTEGER
      },
      joiboSharUser: {
        type: Sequelize.INTEGER
      },
      joiboSharLand: {
        type: Sequelize.INTEGER
      },
      compostSharUser: {
        type: Sequelize.INTEGER
      },
      compostSharLand: {
        type: Sequelize.INTEGER
      },
      vermiCompostUser: {
        type: Sequelize.INTEGER
      },
      vermiCompostLand: {
        type: Sequelize.INTEGER
      },
      khamarJatUser: {
        type: Sequelize.INTEGER
      },
      khamarJatLand: {
        type: Sequelize.INTEGER
      },
      shushomoSharUser: {
        type: Sequelize.INTEGER
      },
      shushomoSharLand: {
        type: Sequelize.INTEGER
      },
      onlineUser: {
        type: Sequelize.INTEGER
      },
      onlineLand: {
        type: Sequelize.INTEGER
      },
      ayilUser: {
        type: Sequelize.INTEGER
      },
      ayilLand: {
        type: Sequelize.INTEGER
      },
      rastaMachaUser: {
        type: Sequelize.INTEGER
      },
      rastaMachaLand: {
        type: Sequelize.INTEGER
      },
      bostaUser: {
        type: Sequelize.INTEGER
      },
      bostaLand: {
        type: Sequelize.INTEGER
      },
      pukurMachaUser: {
        type: Sequelize.INTEGER
      },
      pukurMachaLand: {
        type: Sequelize.INTEGER
      },
      shorjanUser: {
        type: Sequelize.INTEGER
      },
      shorjanLand: {
        type: Sequelize.INTEGER
      },
      vashomanUser: {
        type: Sequelize.INTEGER
      },
      vashomanLand: {
        type: Sequelize.INTEGER
      },
      binaShobjiUser: {
        type: Sequelize.INTEGER
      },
      binaShobjiLand: {
        type: Sequelize.INTEGER
      },
      binaRoshunUser: {
        type: Sequelize.INTEGER
      },
      binaRoshunLand: {
        type: Sequelize.INTEGER
      },
      binaAluUser: {
        type: Sequelize.INTEGER
      },
      binaAluLand: {
        type: Sequelize.INTEGER
      },
      binaShorishaUser: {
        type: Sequelize.INTEGER
      },
      binaShorishaLand: {
        type: Sequelize.INTEGER
      },
      alokFaadUser: {
        type: Sequelize.INTEGER
      },
      alokFaadLand: {
        type: Sequelize.INTEGER
      },
      feromanUser: {
        type: Sequelize.INTEGER
      },
      feromanLand: {
        type: Sequelize.INTEGER
      },
      bishtopUser: {
        type: Sequelize.INTEGER
      },
      bishtopLand: {
        type: Sequelize.INTEGER
      },
      holudAthaloUser: {
        type: Sequelize.INTEGER
      },
      holudAthaloLand: {
        type: Sequelize.INTEGER
      },
      parchingUser: {
        type: Sequelize.INTEGER
      },
      parchingLand: {
        type: Sequelize.INTEGER
      },
      polytheneParchingUser: {
        type: Sequelize.INTEGER
      },
      polytheneParchingLand: {
        type: Sequelize.INTEGER
      },
      baggingShobjiUser: {
        type: Sequelize.INTEGER
      },
      baggingShobjiLand: {
        type: Sequelize.INTEGER
      },
      baggingFolUser: {
        type: Sequelize.INTEGER
      },
      baggingFolLand: {
        type: Sequelize.INTEGER
      },
      folPruningUser: {
        type: Sequelize.INTEGER
      },
      folPruningLand: {
        type: Sequelize.INTEGER
      },
      folSharShechUser: {
        type: Sequelize.INTEGER
      },
      folSharShechLand: {
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
  
    return technologyExpansion;
  };