class Timer {
    countdownTime: number;
    constructor(time: number) {
        this.countdownTime = time;
    }

    public commenceTimer = () => {
        let countdown: number = this.countdownTime;
        setInterval(() => {
            console.clear();
            countdown -= 1;
            const minutes: number = ~~(countdown / 60);
            let seconds: string = (countdown - minutes * 60).toString();
            if (parseInt(seconds) < 10) seconds = `0${seconds}`;
            console.log(`Left: ${minutes}:${seconds}`);
            if (countdown < 1) {
                console.log('Beep beep!');
            }
        }, 1000);
    };
}

export default Timer;
