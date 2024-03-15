function displayHelp() {
    console.log("Creating a Functional Component:");
    console.log("\tcreate fc <[path]ComponentName> [--props/-p]");
    console.log("Examples:");
    console.log("\tcreate fc Kitten");
    console.log("\tcreate fc CuteAnimals/Kitten");
    console.log("\tcreate fc /CuteAnimals/Kitten");
    console.log("\tcreate fc CuteAnimals/Kitten --props");

    console.log("\nCreating a Class Component:");
    console.log("\tcreate cc <[path]ComponentName> [--props/-p] [--state/-s]");
    console.log("Examples:");
    console.log("\tcreate cc Kitten");
    console.log("\tcreate cc CuteAnimals/Kitten");
    console.log("\tcreate cc /CuteAnimals/Kitten");
    console.log("\tcreate cc CuteAnimals/Kitten --props");
    console.log("\tcreate cc CuteAnimals/Kitten --state");
    console.log("\tcreate cc CuteAnimals/Kitten --props --state");

    console.log("\nCreating a Model Class:");
    console.log("\tcreate model <[path]ModelName>");
    console.log("Examples:");
    console.log("\tcreate model KittenModel");
    console.log("\tcreate model CuteAnimals/KittenModel");
    console.log("\tcreate model /CuteAnimals/KittenModel");

    console.log("\nNote:");
    console.log("\tcreate fc Kitten  --> Creates the component in \"./src/Components/Kitten\" folder.");
    console.log("\tcreate fc /Kitten --> Creates the component in \"./src/Kitten\" folder.");
    console.log("\tcreate model KittenModel  --> Creates the model in \"./src/Models\" folder.");
    console.log("\tcreate model /KittenModel --> Creates the model in \"./src\" folder.");
}

module.exports = displayHelp;