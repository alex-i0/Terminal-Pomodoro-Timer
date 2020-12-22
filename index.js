"use strict";
exports.__esModule = true;
var readline = require("readline");
var figlet_1 = require("figlet");
var Pomodoro_1 = require("./Pomodoro/Pomodoro");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(figlet_1.textSync('Pomo', { horizontalLayout: 'default', verticalLayout: 'default', width: 40 }));
rl.question('What Interval length do you want?\n', function (intervalLength) {
    console.clear();
    rl.question('How many intervals do you want?\n', function (numberOfIntervals) {
        console.clear();
        var closeReadline = rl.close;
        var PomodoroInstance = new Pomodoro_1["default"](parseInt(intervalLength), parseInt(numberOfIntervals), 5, 15, closeReadline);
        PomodoroInstance.setPomodoro();
    });
});
rl.on('close', function () {
    process.exit(0);
});
