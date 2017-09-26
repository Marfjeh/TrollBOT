const 	discord = require("discord.js"),
		marfBOT = require("./MarfBOT.js"),
		config 	= require("./config.js"),
		stdin 	= process.openStdin();
var		delete_timer = 0;

marfBOT.clog('Kernel', "MarfBot Kernel Loaded!");
marfBOT.clog('Kernel', "TrollBot Ready");
marfBOT.nlog("To enable the payloads, you need to run a command. type \"help\" for a list of commands here.");

stdin.addListener("data", function(d) {
	readline = d.toString().trim();
    if (readline === "help") {
    	marfBOT.clog("help", "help -> shows this.");
    	marfBOT.clog("help", "delete [int] -> delete every message send after seconds");
    	marfBOT.clog("help", "emoji [int] ->  DM a random emoji to GameKing-XD.");
    	marfBOT.clog("help", "restart -> drop connection and reconnect to discord api");
    	marfBOT.clog("help", "stop -> shutdown connection gracefully and shutdown the bot.");
    	
    } else if (readline.startsWith("delete")) {
    	delete_timer = readline.substring(7);
    }
});