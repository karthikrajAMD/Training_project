module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      fName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return User;
};
