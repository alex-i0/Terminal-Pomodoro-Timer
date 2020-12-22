"use strict";
exports.__esModule = true;
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
            console.log("Interval " + _this.currentInterval + "/" + _this.numberOfIntervals + " has begun!");
            setTimeout(function () {
                _this.endInterval();
            }, _this.intervalLength);
        };
        this.commenceBreak = function () {
            // Give user option to start, skip, cancel
            var breakTime;
            if (_this.currentBreak % 3 !== 0)
                breakTime = _this.shortBreakLength;
            if (_this.currentBreak % 3 === 0)
                breakTime = _this.longBreakLength;
            console.log("Break time: " + _this.shortBreakLength + " minute(s)");
            setTimeout(function () {
                _this.commenceInterval;
            }, breakTime);
            _this.currentBreak++;
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
        this.shortBreakLength = shortBreakLength;
        this.longBreakLength = longBreakLength;
        this.readlineClose = rlClose;
    }
    return Pomodoro;
}());
exports["default"] = Pomodoro;
