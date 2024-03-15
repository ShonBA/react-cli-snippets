const count = process.argv.length - 2;
const first = process.argv[2];
const second = process.argv[3];
const third = process.argv[4];
const fourth = process.argv[5];
const fifth = process.argv[6];

function isFirstHelp() {
    return first === "--help" || first === "-h";
}

function isFirstVersion() {
    return first === "--version" || first === "-v";
}

function isFirstFC() {
    return first === "fc";
}

function isFirstCC() {
    return first === "cc";
}

function isFirstModel() {
    return first === "model";
}

function isThirdProps() {
    return third === "--props" || third === "-p";
}

function isThirdState() {
    return third === "--state" || third === "-s";
}

function isThirdScss() {
    return third === "--scss";
}

function isFourthProps() {
    return fourth === "--props" || fourth === "-p";
}

function isFourthState() {
    return fourth === "--state" || fourth === "-s";
}
function isFourthScss() {
    return fourth === "--scss";
}
function isFifthProps() {
    return fifth === "--props" || fifth === "-p";
}

function isFifthState() {
    return fifth === "--state" || fifth === "-s";
}
function isFifthScss() {
    return fifth === "--scss";
}

function containProps() {
    return isThirdProps() || isFourthProps() || isFifthProps();
}

function containState() {
    return isThirdState() || isFourthState() || isFifthState();
}

function containScss() {
    if (isThirdScss() || isFourthScss() || isFifthScss()) {
        return true;
    } return false
}

function containPropsState() {
    return containProps() && containState();
}

function getComponentName() {
    const parts = second.split("/");
    return parts[parts.length - 1];
}

function getModelName() {
    const parts = second.split("/");
    return parts[parts.length - 1];
}

function getEntityDefaultFolderName() {
    return isFirstModel() ? "Models" : "Components";
}

function getComponentFolderCompletePath() {
    return "./src" + (second[0] === "/" ? second : "/Components/" + second);
}

function getModelFolderCompletePath() {
    const parents = second.lastIndexOf("/") >= 1 ? second.substr(0, second.lastIndexOf("/")) : (second[0] === "/" ? "/" : "");
    const completePath = "./src" + (parents[0] === "/" ? parents : "/Models/" + parents);
    return completePath.endsWith("/") ? completePath.substr(0, completePath.length - 1) : completePath;
}

function getCssCompletePath() {
    return getComponentFolderCompletePath() + "/" + getComponentName() + (containScss() ? ".scss" : ".css");
}

function getTsxCompletePath() {
    return getComponentFolderCompletePath() + "/" + getComponentName() + ".tsx";
}

function getModelTsCompletePath() {
    return getModelFolderCompletePath() + "/" + getModelName() + ".ts";
}

module.exports = {
    count, first, second, third, fourth,
    isFirstHelp, isFirstVersion, isFirstFC, isFirstCC, isFirstModel,
    isThirdProps, isThirdState, isThirdScss,
    isFourthProps, isFourthState, isFourthScss,
    isFifthProps, isFifthState, isFifthScss,
    containProps, containState, containPropsState, containScss,
    getComponentName, getModelName, getEntityDefaultFolderName, getComponentFolderCompletePath, getModelFolderCompletePath, getCssCompletePath, getTsxCompletePath, getModelTsCompletePath
};