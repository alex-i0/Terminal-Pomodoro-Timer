import Timer from '../Timer/Timer';
import TimeConverter from '../TimeConverter/TimeConverter';

class Pomodoro {
    intervalLength: number;
    numberOfIntervals: number;
    shortBreakLength: number;
    longBreakLength: number;
    currentInterval: number = 1;
    currentBreak: number = 1;
    readlineClose: () => void;
    private TimerInstance: Timer;
    private TimeConverterInstance: TimeConverter = new TimeConverter();
    private minutesToMiliseconds = this.TimeConverterInstance.minutesToMiliseconds;
    private secondsToMiliseconds = this.TimeConverterInstance.secondsToMiliseconds;

    constructor(intervalLength: number, numberOfIntervals: number, shortBreakLength: number, longBreakLength: number, rlClose: () => void) {
        this.intervalLength = this.minutesToMiliseconds(intervalLength);
        this.shortBreakLength = this.minutesToMiliseconds(shortBreakLength);
        this.longBreakLength = this.minutesToMiliseconds(longBreakLength);
        this.numberOfIntervals = numberOfIntervals;
        this.readlineClose = rlClose;
    }

    private initialTimerStatus = (): void => {
        //TODO: Replace console.logs with chalk
        console.log('Timer has started!');
        console.log(`Timer set for ${this.intervalLength / 60000} minute(s)`);
    };

    private commenceInterval = (): void => {
        // Give user option to start, skip, cancel
        const intervalLengthInSeconds = (this.intervalLength / 60000) * 60;
        this.TimerInstance = new Timer(intervalLengthInSeconds, 'Interval', this.endInterval);
        console.log(`Interval ${this.currentInterval}/${this.numberOfIntervals} has begun!`);
        this.TimerInstance.commenceTimer();
    };

    private commenceBreak = (): void => {
        // Give user option to start, skip, cancel
        let breakLengthInSeconds: number;
        if (this.currentBreak % 3 !== 0) breakLengthInSeconds = this.shortBreakLength;
        if (this.currentBreak % 3 === 0) breakLengthInSeconds = this.longBreakLength;
        breakLengthInSeconds = (breakLengthInSeconds / 60000) * 60;

        console.log(`Break time: ${breakLengthInSeconds / 60} minute(s)`);

        this.TimerInstance = new Timer(breakLengthInSeconds, 'Break', this.endBreak);
        this.TimerInstance.commenceTimer();
    };

    private endBreak = (): void => {
        this.currentBreak++;
        this.commenceInterval();
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
