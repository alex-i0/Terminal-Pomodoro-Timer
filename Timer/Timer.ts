class Timer {
    intervalLength: number;
    numberOfIntervals: number;
    shortBreakLength: number;
    longBreakLength: number;
    currentInterval: number = 1;
    currentBreak: number = 1;
    readlineClose: () => void;

    constructor(intervalLength: number, numberOfIntervals: number, shortBreakLength: number, longBreakLength: number, rlClose: () => void) {
        this.intervalLength = intervalLength * 60000;
        this.numberOfIntervals = numberOfIntervals;
        this.shortBreakLength = shortBreakLength;
        this.longBreakLength = longBreakLength;
        this.readlineClose = rlClose;
    }

    private commenceTimer = (): void => {
        console.log('Timer has started!');
        console.log(`Timer set for ${this.intervalLength / 60000} minute(s)`);
    };

    private commenceInterval = (): void => {
        console.log(`Interval ${this.currentInterval}/${this.numberOfIntervals} has begun!`);
        setTimeout(() => {
            this.endInterval();
        }, this.intervalLength);
    };

    private commenceBreak = (): void => {
        let breakTime;
        if (this.currentBreak % 3 !== 0) breakTime = this.shortBreakLength;
        if (this.currentBreak % 3 === 0) breakTime = this.longBreakLength;

        console.log(`Break time: ${this.shortBreakLength} minute(s)`);
        setTimeout(() => {
            this.commenceInterval;
        }, breakTime);
    };

    private endInterval = (): void => {
        console.log('Interval has ended');
        if (this.currentInterval === this.numberOfIntervals) {
            console.log('method: _endInterval');
            this.endTimer();
        } else {
            this.currentInterval++;
            this.commenceBreak();
        }
    };

    private endTimer = (): void => {
        console.log('You did great! All intervals has been completed. Take a long rest.');
        this.readlineClose;
    };

    public setTimer = (): void => {
        this.commenceTimer();
        this.commenceInterval();
    };
}

export default Timer;
