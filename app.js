#!/usr/bin/env node

require("./code/extensions");
const validate = require("./code/validate");
const doIt = require("./code/do-it");

if (!validate()) return;

doIt();