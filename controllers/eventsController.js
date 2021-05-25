const db = require("../models");
const moment = require("moment");

const success = { status: "ok" };

module.exports = {
  create: function (req, res) {
    console.log(`create route hit: ${JSON.stringify(req.body)}`);
    db.Event.create(req.body)
      .then(() => res.status(200).json(success))
      .catch((err) => res.status(422).json(err));
  },
  removeAll: function (req, res) {
    console.log("removeAll route hit");
    db.Event.remove({})
      .then(() => res.status(200).json(success))
      .catch((err) => res.status(422).json(err));
  },

  list: function (req, res) {
    let searchObj = {};
    if (req.query.from) {
      searchObj = {
        date: {
          $gte: moment(req.query.from, "YYYYMMDDThh:mm:ssZ").toISOString(),
          $lte: moment(req.query.to, "YYYYMMDDThh:mm:ssZ").toISOString(),
          // $gte: req.query.from,
          // $lte: req.query.to,
        },
      };
    }
    console.log(`list route hit: ${JSON.stringify(searchObj, null, 2)}`);
    db.Event.find(searchObj)
      .sort({ date: -1 })
      .exec(function (err, results) {
        if (err) return res.status(422).json(err);
        return res.status(200).json({ events: [...results] });
      });
  },

  summary: function (req, res) {
    console.log(JSON.stringify(req.query, null, 2));
    console.log(req.query.by);
    let timeframe;
    switch (req.query.by) {
      case "minute":
        timeframe = "$minute"
        break;
      case "hour":
        timeframe = "$hour"
        break;
      case "day":
        timeframe = "$dayOfYear"
        break;
      default:
        timeframe = "$hour"
    }
    db.Event.aggregate([
      {
        $match: {
          date: {
            $gte: moment(req.query.from, "YYYYMMDDThh:mm:ssZ").toISOString(),
            $lte: moment(req.query.to, "YYYYMMDDThh:mm:ssZ").toISOString(),
          },
        },
      },
      {
        $group: {
          _id: {
            date: { timeframe: "$date" },
          },
          enters: "",
          leaves: "",
          comments: "",
          highfives: "",
        },
      },
      {
        $count: "",
      },
    ]);
  },
};
