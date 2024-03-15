# react-cli-snippets
CLI Commands for creating React Functional Components, React Class Components and Model Classes using TypeScript syntax.  

## Installation:
``` 
npm i -g react-cli-snippets
```

## CLI Commands:
```create fc Kitten``` creates a Functional Component.<br>
```create fc Kitten --props``` creates a Functional Component with Props.<br>
```create cc Kitten``` creates a Class Component.<br>
```create cc Kitten --props``` creates a Class Component with Props.<br>
```create cc Kitten --state``` creates a Class Component with State.<br>
```create cc Kitten --props --state``` creates a Class Component with Props and State.<br>
```create model KittenModel``` creates a Model Class.<br>
```create --help``` Displays help.<br>
```create --version``` Displays version.<br>
Also, you can use shortened flags:
- -p instead of --props
- -s instead of --state
- -h instead of --help
- -v instead of --version

## Directories & Files:
Each component contains a **.css** file and a **.tsx** file.<br>
The components are created by default inside **./src/Components** folder.<br>
To create a component directly inside **./src** folder instead, prefix it with a forward slash.<br>
The models are created by default inside **./src/Models** folder.<br>
To create a model directly inside **./src** folder instead, prefix it with a forward slash.<br>
Examples:<br>
```create fc Kitten``` creates the component in **./src/Components/Kitten** folder.<br>
```create fc /Kitten``` creates the component in **./src/Kitten** folder.<br>
```create model KittenModel``` creates the model in **./src/Models** folder.<br>
```create model /KittenModel``` creates the model in **./src** folder.<br>

### Happy Components Creation :-)