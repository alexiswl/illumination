const express = require("express");
const router = express.Router();
const request = require("request");
const illumina = require("../utils/illumina");
const utils = require("../utils/utils")
const pageSize = 100;
const request_opts = illumina.request_opts();

router.get("/", (req, res) => {
  let opts = request_opts;
  opts.url = "/volumes";
  opts.qs = {
    pageSize: pageSize,
  };

  request.get(opts, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      // res.send(body);
      res.render("gds/volumes", {
        volumes: body,
        id2username: illumina.id2username,
        format_date: utils.format_date
      });
    } else {
      utils.print_error(error);
    }
  });
});

router.get("/:volumeid", (req, res) => {
  let opts = request_opts;
  const volid = req.params.volumeid;
  opts.url = `/volumes/${volid}`;

  request.get(opts, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.render("gds/volumeid", {
        vinfo: body,
        volid: volid,
        jsonSyntaxHighlight: utils.jsonSyntaxHighlight
      });
    } else {
      utils.print_error(error);
    }
  });
});


module.exports = router;