const args = require("./args");
const displayHelp = require("./display-help");
const displayVersion = require("./display-version");
const createFc = require("./create-fc");
const createFcProps = require("./create-fc-props");
const createCc = require("./create-cc");
const createCcProps = require("./create-cc-props");
const createCcState = require("./create-cc-state");
const createCcPropsState = require("./create-cc-props-state");
const createModel = require("./create-model");

function doIt() {
    if(args.isFirstHelp()) return displayHelp();
    if(args.isFirstVersion()) return displayVersion();
    if(args.isFirstFC() && args.containProps()) return createFcProps();
    if(args.isFirstFC()) return createFc();
    if(args.isFirstCC() && args.containPropsState()) return createCcPropsState();
    if(args.isFirstCC() && args.containProps()) return createCcProps();
    if(args.isFirstCC() && args.containState()) return createCcState();
    if(args.isFirstCC()) return createCc();
    if(args.isFirstModel()) return createModel();
}

module.exports = doIt;