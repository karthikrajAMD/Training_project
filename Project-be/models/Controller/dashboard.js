const db = require("../Entity");
const upComingEvents = db.upcomingEvents;
const publicHolidays = db.publicHoliday;
const getAllEvent = async (req, res) => {
  try {
    let upcomingEvent = await upComingEvents.findAll();
    if (upcomingEvent) {
      res.send({ statusCode: 200, upcomingEvent });
    } else {
      res.status(400).send({ statusCode: 400, message: "No data" });
    }
  } catch (error) {
    res.status(500).send({ statusCode: 400, message: "Internal error" });
  }
};

const createEvent = async (req, res) => {
  try {
    let createEvent = await upComingEvents.create(req.body);
    res.send({ statusCode: 200, message: "event created successfully" });
  } catch (error) {
    res.status(500).send({ statusCode: 400, message: "Internal error" });
  }
};
const createHoliday = async (req, res) => {
  try {
    let createHoliday = await publicHolidays.create(req.body);
    res.send({
      statusCode: 200,
      message: "public holiday created successfully",
    });
  } catch (error) {
    res.status(500).send({ statusCode: 400, message: "Internal error" });
  }
};
const getAllHoliday = async (req, res) => {
  try {
    let getAllHoliday = await publicHolidays.findAll();
    if (getAllHoliday) {
      res.send({ statusCode: 200, getAllHoliday });
    } else {
      res.status(400).send({ statusCode: 400, message: "No data" });
    }
  } catch (error) {
    res.status(500).send({ statusCode: 400, message: "Internal error" });
  }
};
module.exports = {
  getAllEvent,
  createEvent,
  createHoliday,
  getAllHoliday,
};
