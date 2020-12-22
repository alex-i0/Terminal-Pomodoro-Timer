import Timer from './Timer/Timer';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What Interval length do you want?\n', (intervalLength: string) => {
    rl.question('How many intervals do you want?\n', (numberOfIntervals: string) => {
        const closeReadline = rl.close;
        const timerInstance: Timer = new Timer(parseInt(intervalLength), parseInt(numberOfIntervals), 5, 15, closeReadline);
        timerInstance.setTimer();
    });
});

rl.on('close', () => {
    process.exit(0);
});
