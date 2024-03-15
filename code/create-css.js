const fs = require("fs");
const args = require("./args");

function createCss() {
    const componentName = args.getComponentName();
    const cssCompletePath = args.getCssCompletePath();
    const foldersCompletePath = args.getComponentFolderCompletePath();
    const cssContent = getCssContent(componentName);
    if (!fs.existsSync(foldersCompletePath)) fs.mkdirSync(foldersCompletePath, { recursive: true });
    fs.writeFileSync(cssCompletePath, cssContent);
}

function getCssContent(componentName) {
    return `.${componentName} {
\t
}
`;
}

module.exports = createCss;