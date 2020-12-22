class Timer {
    countdownTime: number;
    constructor(time: number) {
        this.countdownTime = time;
    }

    public commenceTimer = () => {
        let countdown = this.countdownTime;
        setInterval(() => {
            console.clear();
            countdown -= 1;
            const minutes = ~~(countdown / 60);
            //Seconds should display 0 e.g. 05, 06, 07 not 5, 6, 7
            let seconds = countdown - minutes * 60;
            console.log(`Left: ${minutes}:${seconds}`);
            if (countdown < 1) {
                console.log('Beep beep!');
            }
        }, 1000);
    };
}

export default Timer;
