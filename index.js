"use strict";
exports.__esModule = true;
var Timer_1 = require("./Timer/Timer");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What Interval length do you want?\n', function (intervalLength) {
    rl.question('How many intervals do you want?\n', function (numberOfIntervals) {
        var closeReadline = rl.close;
        var timerInstance = new Timer_1["default"](parseInt(intervalLength), parseInt(numberOfIntervals), 5, 15, closeReadline);
        timerInstance.setTimer();
    });
});
rl.on('close', function () {
    process.exit(0);
});
