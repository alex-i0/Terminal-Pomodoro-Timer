"use strict";
exports.__esModule = true;
var Timer_1 = require("../Timer/Timer");
var Pomodoro = /** @class */ (function () {
    function Pomodoro(intervalLength, numberOfIntervals, shortBreakLength, longBreakLength, rlClose) {
        var _this = this;
        this.currentInterval = 1;
        this.currentBreak = 1;
        this.initialTimerStatus = function () {
            console.log('Timer has started!');
            console.log("Timer set for " + _this.intervalLength / 60000 + " minute(s)");
        };
        this.commenceInterval = function () {
            // Give user option to start, skip, cancel
            var intervalLengthInSeconds = (_this.intervalLength / 60000) * 60;
            _this.TimerInstance = new Timer_1["default"](intervalLengthInSeconds, 'Interval', _this.endInterval);
            console.log("Interval " + _this.currentInterval + "/" + _this.numberOfIntervals + " has begun!");
            _this.TimerInstance.commenceTimer();
        };
        this.commenceBreak = function () {
            // Give user option to start, skip, cancel
            var breakLengthInSeconds;
            if (_this.currentBreak % 3 !== 0)
                breakLengthInSeconds = _this.shortBreakLength;
            if (_this.currentBreak % 3 === 0)
                breakLengthInSeconds = _this.longBreakLength;
            breakLengthInSeconds = (breakLengthInSeconds / 60000) * 60;
            console.log("Break time: " + breakLengthInSeconds / 60 + " minute(s)");
            _this.TimerInstance = new Timer_1["default"](breakLengthInSeconds, 'Break', _this.endBreak);
            _this.TimerInstance.commenceTimer();
        };
        this.endBreak = function () {
            _this.currentBreak++;
            _this.commenceInterval();
        };
        this.endInterval = function () {
            console.log('Interval has ended');
            if (_this.currentInterval === _this.numberOfIntervals) {
                _this.endPomodoro();
            }
            else {
                _this.currentInterval++;
                _this.commenceBreak();
            }
        };
        this.endPomodoro = function () {
            console.log('You did great! All intervals has been completed. Take a long rest.');
            _this.readlineClose;
        };
        this.setPomodoro = function () {
            _this.initialTimerStatus();
            _this.commenceInterval();
        };
        this.intervalLength = intervalLength * 60000;
        this.numberOfIntervals = numberOfIntervals;
        this.shortBreakLength = shortBreakLength * 60000;
        this.longBreakLength = longBreakLength * 60000;
        this.readlineClose = rlClose;
    }
    return Pomodoro;
}());
exports["default"] = Pomodoro;
