
// Register the command
register("command", (arg, arg2) => {
    argument = arg;
    // Check if both arguments are provided
    if (argument) {
        let link = `https://sky.shiiyu.moe/stats/${argument}`;
        // Send the link to the player client-side
        ChatLib.chat(link);
    } else {
        // Send an error message if both arguments are not provided
        ChatLib.chat("§cUsage: /view [ign]");
    }
}).setName("view");
