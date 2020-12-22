"use strict";
exports.__esModule = true;
var Timer = /** @class */ (function () {
    function Timer(intervalLength, numberOfIntervals, shortBreakLength, longBreakLength, rlClose) {
        var _this = this;
        this.currentInterval = 1;
        this.currentBreak = 1;
        this.commenceTimer = function () {
            console.log('Timer has started!');
            console.log("Timer set for " + _this.intervalLength / 60000 + " minute(s)");
        };
        this.commenceInterval = function () {
            console.log("Interval " + _this.currentInterval + "/" + _this.numberOfIntervals + " has begun!");
            setTimeout(function () {
                _this.endInterval();
            }, _this.intervalLength);
        };
        this.commenceBreak = function () {
            var breakTime;
            if (_this.currentBreak % 3 !== 0)
                breakTime = _this.shortBreakLength;
            if (_this.currentBreak % 3 === 0)
                breakTime = _this.longBreakLength;
            console.log("Break time: " + _this.shortBreakLength + " minute(s)");
            setTimeout(function () {
                _this.commenceInterval;
            }, breakTime);
        };
        this.endInterval = function () {
            console.log('Interval has ended');
            if (_this.currentInterval === _this.numberOfIntervals) {
                console.log('method: _endInterval');
                _this.endTimer();
            }
            else {
                _this.currentInterval++;
                _this.commenceBreak();
            }
        };
        this.endTimer = function () {
            console.log('You did great! All intervals has been completed. Take a long rest.');
            _this.readlineClose;
        };
        this.setTimer = function () {
            _this.commenceTimer();
            _this.commenceInterval();
        };
        this.intervalLength = intervalLength * 60000;
        this.numberOfIntervals = numberOfIntervals;
        this.shortBreakLength = shortBreakLength;
        this.longBreakLength = longBreakLength;
        this.readlineClose = rlClose;
    }
    return Timer;
}());
exports["default"] = Timer;
