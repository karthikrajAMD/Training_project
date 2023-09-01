const db = require("../Entity");
const User = db.users;

// console.log(User);

const create = async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.username && req.body.password && req.body.email) {
      const { username, password, email, fName } = req.body;

      await User.create({
        fName,
        username,
        password,
        email,
      });

      res.send({ status: 200, message: "Data added successfully" });
    } else {
      res.status(400).send("Not added to the database!");
    }
  } catch (error) {
    res
      .status(400)
      .send({ status: 400, message: "Error adding or duplicate data" });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    let myData;
    let user;
    user = await User.findOne({
      where: {
        email: username,
        password: password,
      },
    });
    if (user == null) {
      user = await User.findOne({
        where: {
          username: username,
          password: password,
        },
      });
    }

    myData = {
      email: user.email,
      id: user.id,
    };
    if (user) {
      res.send({ statusCode: 200, message: "Login successful", myData });
    } else {
      res.status(400).send("Not added to the database!");
    }
  } catch (error) {
    res.send({ status: 400, message: "Error logging " });
  }
};

module.exports = {
  create,
  login,
};
