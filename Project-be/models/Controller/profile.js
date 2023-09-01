const db = require("../Entity");

const Profile = db.profile;
const User = db.users;

const getProfileData = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);
    const profile = await Profile.findOne({
      where: {
        email: email,
      },
    });
    console.log(profile);
    if (profile) {
      console.log(profile);
      res.send({ statusCode: 200, profile });
    } else {
      res.status(400).send("Data error");
    }
  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal Error " });
  }
};

const profileCreate = async (req, res) => {
  console.log(req.body);
  try {
    const {
      email,
      imageUrl,
      jobTitle,
      Dob,
      Doj,
      address,
      bloodGroup,
      mobile,
      educationBackground,
    } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    // console.log("user", user);
    if (user) {
      await Profile.create({
        email,
        imageUrl,
        jobTitle,
        Dob,
        Doj,
        address,
        bloodGroup,
        mobile,
        educationBackground,
      });

      res.send({ statusCode: 200, message: "Profile added" });
    } else {
      res.status(400).send("Duplicate details please do update!");
    }
  } catch (error) {
    res.status(500).send({ status: 400, message: "Internal error" });
  }
};
const profileUpdate = async (req, res) => {
  //   console.log(req.body);
  try {
    const {
      email,
      imageUrl,
      jobTitle,
      Dob,
      Doj,
      address,
      bloodGroup,
      mobile,
      educationBackground,
    } = req.body;
    console.log(req.body);
    const profile = await Profile.findOne({
      where: {
        email: email,
      },
    });
    let updateValues = {
      imageUrl: imageUrl,
      jobTitle: jobTitle,
      Dob: Dob,
      Doj: Doj,
      address: address,
      bloodGroup: bloodGroup,
      mobile: mobile,
      educationBackground: educationBackground,
    };
    console.log("user", profile);
    if (profile) {
      await Profile.update(updateValues, { where: { email: email } });

      res.send({ statusCode: 200, message: "Profile updated" });
    } else {
      res.status(400).send("Profile not updated!");
    }
  } catch (error) {
    res.status(400).send({ status: 400, message: "Error updating profile " });
  }
};

module.exports = {
  profileCreate,
  profileUpdate,
  getProfileData,
};
