module.exports = (sequelize, DataTypes) => {
  const publicHoliday = sequelize.define("publicHolidays", {
    date: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  return publicHoliday;
};
