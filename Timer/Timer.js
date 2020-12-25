"use strict";
exports.__esModule = true;
var Timer = /** @class */ (function () {
    function Timer(time, timerType, callback) {
        var _this = this;
        this.commenceTimer = function () {
            var countdown = _this.countdownTime;
            var timerID = setInterval(function () {
                console.clear();
                countdown--;
                var minutes = ~~(countdown / 60);
                var seconds = (countdown - minutes * 60).toString();
                if (parseInt(seconds) < 10)
                    seconds = "0" + seconds;
                console.log(_this.timerType + ": " + minutes + ":" + seconds);
                if (countdown < 1)
                    _this.stopTimer(timerID);
            }, 1000);
        };
        this.stopTimer = function (timerID) {
            clearInterval(timerID);
            _this.callback();
        };
        this.countdownTime = time;
        this.timerType = timerType;
        this.callback = callback;
    }
    return Timer;
}());
exports["default"] = Timer;
