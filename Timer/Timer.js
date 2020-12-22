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
                //Seconds should display 0 e.g. 05, 06, 07 not 5, 6, 7
                var seconds = countdown - minutes * 60;
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
