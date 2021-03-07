module.exports = (sequelize, Sequelize) => {
  const technologyList = sequelize.define("technologyList", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    technology: {
      type: Sequelize.STRING
    },
  });

  return technologyList;
};
