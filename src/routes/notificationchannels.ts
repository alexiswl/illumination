import express from "express";
const router = express.Router();
const axios = require("axios").default;
const illumina = require("../utils/illumina");
const utils = require("../utils/utils");
const request_opts = illumina.request_opts();
const id2username = require("../utils/id2username");

router.get("/", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  opts.url = "/notificationChannels";
  opts.params = qs;
  axios(opts)
    .then((response: any) => {
      // res.send(response.data);
      res.render("notificationchannels", {
       data: response.data,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error: Error) => utils.print_error(error));
});

module.exports = router;