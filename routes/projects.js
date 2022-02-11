const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const illumina = require("../utils/illumina");
const utils = require("../utils/utils");
const request_opts = illumina.request_opts();
const id2username = require("../utils/id2username");

router.get("/", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  opts.url = "/projects";
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/projects", {
       data: response.data,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  opts.url = `/projects/${projectid}`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/projectid", {
       data: response.data,
       projectid: projectid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid/analyses", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  opts.url = `/projects/${projectid}/analyses`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/analyses", {
       data: response.data,
       projectid: projectid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid/analyses/:analysisid", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  const analysisid = req.params.analysisid;
  opts.url = `/projects/${projectid}/analyses/${analysisid}`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/analysisid", {
       data: response.data,
       projectid: projectid,
       analysisid: analysisid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid/analyses/:analysisid/steps", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  const analysisid = req.params.analysisid;
  opts.url = `/projects/${projectid}/analyses/${analysisid}/steps`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/analysissteps", {
       data: response.data,
       projectid: projectid,
       analysisid: analysisid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid/analyses/:analysisid/inputs", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  const analysisid = req.params.analysisid;
  opts.url = `/projects/${projectid}/analyses/${analysisid}/inputs`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/analysisinputs", {
       data: response.data,
       projectid: projectid,
       analysisid: analysisid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid/analyses/:analysisid/outputs", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  const analysisid = req.params.analysisid;
  opts.url = `/projects/${projectid}/analyses/${analysisid}/outputs`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/analysisoutputs", {
       data: response.data,
       projectid: projectid,
       analysisid: analysisid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid/analyses/:analysisid/rawOutput", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  const analysisid = req.params.analysisid;
  opts.url = `/projects/${projectid}/analyses/${analysisid}/rawOutput`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/analysisrawoutput", {
       data: response.data,
       projectid: projectid,
       analysisid: analysisid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

router.get("/:projectid/analyses/:analysisid/configurations", (req, res) => {
  let opts = request_opts;
  let qs = req.query;
  const projectid = req.params.projectid;
  const analysisid = req.params.analysisid;
  opts.url = `/projects/${projectid}/analyses/${analysisid}/configurations`;
  opts.params = qs;
  axios(opts)
    .then((response) => {
      //res.send(response.data);
      res.render("projects/analysisconfigurations", {
       data: response.data,
       projectid: projectid,
       analysisid: analysisid,
       id2username: id2username.id2username,
       jsonSyntaxHighlight: utils.jsonSyntaxHighlight,
       });
    })
    .catch((error) => utils.print_error(error));
});

module.exports = router;
