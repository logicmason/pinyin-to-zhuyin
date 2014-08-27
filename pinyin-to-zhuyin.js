#!/usr/bin/env node
var cliArgs = process.argv.slice(2);

var fs = require('fs');
var _ = require('lodash');

var converter = module.exports = function (obj) {
  obj = obj || {};
  console.log(obj);
};

converter(cliArgs);