const fs = require("fs");
const args = require("./args");
const createCss = require("./create-css");

function createFC() {
    createCss();
    const componentName = args.getComponentName();
    const tsxCompletePath = args.getTsxCompletePath();
    const tsxContent = getTsxContent(componentName);
    fs.writeFileSync(tsxCompletePath, tsxContent);
}

function getTsxContent(componentName) {
    const componentNameCap = componentName.capitalFirstLetter();
    
    return `import "./${componentName}${(args.containScss() ? ".scss" : ".css")}";

interface ${componentNameCap}Props {
\t
}

function ${componentNameCap}(props: ${componentNameCap}Props): JSX.Element {
    return (
        <div className="${componentName}">
\t\t\t
        </div>
    );
}

export default ${componentNameCap};
`;
}

module.exports = createFC;