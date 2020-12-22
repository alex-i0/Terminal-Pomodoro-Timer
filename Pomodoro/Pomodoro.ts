import Timer from '../Timer/Timer';

class Pomodoro {
    intervalLength: number;
    numberOfIntervals: number;
    shortBreakLength: number;
    longBreakLength: number;
    currentInterval: number = 1;
    currentBreak: number = 1;
    readlineClose: () => void;
    TimerInstance: Timer;

    constructor(intervalLength: number, numberOfIntervals: number, shortBreakLength: number, longBreakLength: number, rlClose: () => void) {
        this.intervalLength = intervalLength * 60000;
        this.numberOfIntervals = numberOfIntervals;
        this.shortBreakLength = shortBreakLength;
        this.longBreakLength = longBreakLength;
        this.readlineClose = rlClose;
    }

    private initialTimerStatus = (): void => {
        console.log('Timer has started!');
        console.log(`Timer set for ${this.intervalLength / 60000} minute(s)`);
    };

    private commenceInterval = (): void => {
        // Give user option to start, skip, cancel
        this.TimerInstance = new Timer((this.intervalLength / 60000) * 60);
        console.log(`Interval ${this.currentInterval}/${this.numberOfIntervals} has begun!`);
        this.TimerInstance.commenceTimer();
        setTimeout(() => {
            this.endInterval();
        }, this.intervalLength);
    };

    private commenceBreak = (): void => {
        // Give user option to start, skip, cancel
        let breakTime;
        if (this.currentBreak % 3 !== 0) breakTime = this.shortBreakLength;
        if (this.currentBreak % 3 === 0) breakTime = this.longBreakLength;

        console.log(`Break time: ${this.shortBreakLength} minute(s)`);
        setTimeout(() => {
            this.commenceInterval;
        }, breakTime);
        this.currentBreak++;
    };

    private endInterval = (): void => {
        console.log('Interval has ended');
        if (this.currentInterval === this.numberOfIntervals) {
            this.endPomodoro();
        } else {
            this.currentInterval++;
            this.commenceBreak();
        }
    };

    private endPomodoro = (): void => {
        console.log('You did great! All intervals has been completed. Take a long rest.');
        this.readlineClose;
    };

    public setPomodoro = (): void => {
        this.initialTimerStatus();
        this.commenceInterval();
    };
}

export default Pomodoro;
