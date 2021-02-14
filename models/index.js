const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pd = require("./pd.model.js")(sequelize, Sequelize);
db.dd = require("./dd.model.js")(sequelize, Sequelize);
db.ad = require("./ad.model.js")(sequelize, Sequelize);
db.upazilla = require("./upazilla.model.js")(sequelize, Sequelize);
db.saao = require("./saao.model.js")(sequelize, Sequelize);
db.trainedFarmer = require("./trainedFarmer.model.js")(sequelize, Sequelize);
db.initialTrial = require("./initialTrial.model.js")(sequelize, Sequelize);
db.trialProgress = require("./trialProgress.model.js")(sequelize, Sequelize);
db.finalTrial = require("./finalTrial.model.js")(sequelize, Sequelize);
db.breedExpansion = require("./breedExpansion.model.js")(sequelize, Sequelize);
db.technologyExpansion = require("./technologyExpansion.model.js")(sequelize, Sequelize);
db.cropExpansion = require("./cropExpansion.model.js")(sequelize, Sequelize);
db.abadiJomi = require("./abadiJomi.model.js")(sequelize, Sequelize);
db.demonstration = require("./demonstration.model.js")(sequelize, Sequelize);
db.fieldDay = require("./fieldDay.model.js")(sequelize, Sequelize);
db.farmerTraining = require("./farmerTraining.model.js")(sequelize, Sequelize);
db.agriFair = require("./agriFair.model.js")(sequelize, Sequelize);
db.farmerPrize = require("./farmerPrize.model.js")(sequelize, Sequelize);
db.llp = require("./llp.model.js")(sequelize, Sequelize);
db.solarLight = require("./solarLight.model.js")(sequelize, Sequelize);
db.producedCrop = require("./producedCrop.model.js")(sequelize, Sequelize);
db.cropNibirota = require("./cropNibirota.model.js")(sequelize, Sequelize);
db.selectedField = require("./selectedField.model.js")(sequelize, Sequelize);

module.exports = db;