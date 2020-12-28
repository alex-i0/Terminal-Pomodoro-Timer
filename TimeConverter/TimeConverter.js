"use strict";
exports.__esModule = true;
var TimeConverter = /** @class */ (function () {
    function TimeConverter() {
        var _this = this;
        this.secondInMiliseconds = 1000;
        this.minuteInMiliseconds = 60 * this.secondInMiliseconds;
        this.minutesToMiliseconds = function (minutes) {
            return minutes * _this.minuteInMiliseconds;
        };
        this.secondsToMiliseconds = function (seconds) {
            return seconds * _this.secondInMiliseconds;
        };
    }
    return TimeConverter;
}());
exports["default"] = TimeConverter;
