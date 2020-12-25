class Timer {
    countdownTime: number;
    timerType: string;
    timerStatus: string;
    callback;
    constructor(time: number, timerType: string, callback) {
        this.countdownTime = time;
        this.timerType = timerType;
        this.callback = callback;
    }

    public commenceTimer = () => {
        let countdown: number = this.countdownTime;
        let timerID = setInterval(() => {
            console.clear();
            countdown--;
            const minutes: number = ~~(countdown / 60);
            let seconds: string = (countdown - minutes * 60).toString();
            if (parseInt(seconds) < 10) seconds = `0${seconds}`;
            console.log(`${this.timerType}: ${minutes}:${seconds}`);
            if (countdown < 1) this.stopTimer(timerID);
        }, 1000);
    };

    private stopTimer = (timerID) => {
        clearInterval(timerID);
        this.callback();
    };
}

export default Timer;
