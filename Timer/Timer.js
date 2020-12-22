"use strict";
exports.__esModule = true;
var Timer = /** @class */ (function () {
    function Timer(time) {
        var _this = this;
        this.commenceTimer = function () {
            var countdown = _this.countdownTime;
            setInterval(function () {
                console.clear();
                countdown -= 1;
                var minutes = ~~(countdown / 60);
                var seconds = (countdown - minutes * 60).toString();
                if (parseInt(seconds) < 10)
                    seconds = "0" + seconds;
                console.log("Left: " + minutes + ":" + seconds);
                if (countdown < 1) {
                    console.log('Beep beep!');
                }
            }, 1000);
        };
        this.countdownTime = time;
    }
    return Timer;
}());
exports["default"] = Timer;
