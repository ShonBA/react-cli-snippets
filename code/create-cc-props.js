const fs = require("fs");
const args = require("./args");
const createCss = require("./create-css");

function createCC() {
    createCss();
    const componentName = args.getComponentName();
    const tsxCompletePath = args.getTsxCompletePath();
    const tsxContent = getTsxContent(componentName);
    fs.writeFileSync(tsxCompletePath, tsxContent);
}

function getTsxContent(componentName) {
    const componentNameCap = componentName.capitalFirstLetter();
    
    return `import { Component } from "react";
import "./${componentName}${(args.containScss() ? ".scss" : ".css")}";

interface ${componentNameCap}Props {
\t
}

class ${componentNameCap} extends Component<${componentNameCap}Props> {

    public render(): JSX.Element {
        return (
            <div className="${componentName}">
\t\t\t\t
            </div>
        );
    }
}

export default ${componentNameCap};
`;
}

module.exports = createCC;