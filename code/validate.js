const args = require("./args");
const fs = require("fs");

function validate() {

    let err = "";

    switch (args.count) {
        case 1:
            // create --version
            // create --help
            if (!args.isFirstHelp() && !args.isFirstVersion()) return error();
            return true;

        case 2:
            // create fc Kitten
            // create cc Kitten
            // create model KittenModel
            if (!args.isFirstFC() && !args.isFirstCC() && !args.isFirstModel()) return error();
            err = getSecondErrorIfExists();
            if (err) return error(err);
            return true;

        case 3:
            // create fc Kitten --props
            // create cc Kitten --props
            // create cc Kitten --state
            if (!args.isFirstFC() && !args.isFirstCC()) return error();
            err = getSecondErrorIfExists();
            if (err) return error(err);
            if (args.isFirstFC() && !args.isThirdProps() && !args.isThirdScss()) return error();
            if (args.isFirstCC() && !args.isThirdProps() && !args.isThirdState() && !args.isThirdScss()) return error();
            return true;

        case 4:
            // create cc Kitten --props --state
            // create cc Kitten --state --props
            if (!args.isFirstCC()) return error();
            err = getSecondErrorIfExists();
            if (err) return error(err);
            if (!args.isThirdProps() && !args.isThirdState() && !args.isThirdScss()) return error();
            if (!args.isFourthProps() && !args.isFourthState() && !args.isFourthScss()) return error();
            if (args.isThirdProps() && args.isFourthProps()) return error();
            if (args.isThirdState() && args.isFourthState()) return error();
            if (args.isThirdScss() && args.isFourthScss()) return error();
            return true;
        case 5:
            // create cc Kitten --props --state --scss
            // create cc Kitten --state --props --scss
            if (!args.isFirstCC()) return error();
            err = getSecondErrorIfExists();
            if (err) return error(err);
            if (!args.isThirdProps() && !args.isThirdState() && !args.isThirdScss()) return error();
            if (!args.isFourthProps() && !args.isFourthState() && !args.isFourthScss()) return error();
            if (!args.isFifthProps() && !args.isFifthState() && !args.isFifthScss()) return error();
            if (args.isThirdProps() && args.isFourthProps() && args.isFifthProps()) return error();
            if (args.isThirdState() && args.isFourthState() && args.isFifthState()) return error();
            if (args.isThirdScss() && args.isFourthScss() && args.isFifthScss()) return error();
            return true;

        default:
            return error();
    }
}

function getSecondErrorIfExists() {
    if (args.second === "" || args.second === "/") {
        return "No entity name specified.";
    }

    if (args.second.indexOf("//") !== -1) {
        return "Path can't contain double slash (//).";
    }

    if (args.second[args.second.length - 1] === "/") {
        return "Entity name can't ends with a slash.";
    }

    const parts = args.second[0] === "/" ? args.second.substr(1).split("/") : args.second.split("/"); // Starting slash is legal and means that user wants to place the component or model directly in the "src" root folder.
    const entityName = parts[parts.length - 1];
    parts.splice(parts.length - 1);
    const parentFolders = parts;

    for (const folder of parentFolders) {
        for (const ch of folder) {
            if (!isLegalFolderChar(ch)) {
                return `'${ch}' is an illegal folder name character.`;
            }
        }
    }

    for (const ch of entityName) {
        if (!isLegalEntityChar(ch)) {
            return `'${ch}' is an illegal entity name character.`;
        }
    }

    if (entityName[0] >= "0" && entityName[0] <= "9") {
        return "Entity name can't start with a digit.";
    }

    const completePath = "./src" + (args.second[0] === "/" ? args.second : "/" + args.getEntityDefaultFolderName() + "/" + args.second);
    if (fs.existsSync(completePath)) {
        return "Same file already exists in that path.";
    }

    return null;
}

function isLegalFolderChar(ch) {
    return isLegalEntityChar(ch) || ch === "-";
}

function isLegalEntityChar(ch) {
    return ch === "_" || ch >= "0" && ch <= "9" || ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z";
}

function error(msg = "Wrong usage.") {
    console.log(msg);
    console.log("For help, run: create --help");
}

module.exports = validate;