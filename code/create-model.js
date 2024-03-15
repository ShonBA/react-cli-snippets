const fs = require("fs");
const args = require("./args");

function createModel() {
    const modelName = args.getModelName();
    const tsCompletePath = args.getModelTsCompletePath();
    const foldersCompletePath = args.getModelFolderCompletePath();
    const tsContent = getTsContent(modelName);
    if (!fs.existsSync(foldersCompletePath)) fs.mkdirSync(foldersCompletePath, { recursive: true });
    fs.writeFileSync(tsCompletePath, tsContent);
}

function getTsContent(modelName) {
    const modelNameCap = modelName.capitalFirstLetter();
    
    return `class ${modelNameCap} {
\t
}

export default ${modelNameCap};
`;
}

module.exports = createModel;