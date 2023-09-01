module.exports = (sequelize, DataTypes) => {
  const upcomingEvents = sequelize.define("upcomingEvents", {
    date: {
      type: DataTypes.STRING,
    },
    event_name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    venue: {
      type: DataTypes.STRING,
    },
  });
  return upcomingEvents;
};
