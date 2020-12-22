import Timer from './Pomodoro/Pomodoro';
import * as readline from 'readline';
import * as Chalk from 'chalk';
import * as inquirer from 'inquirer';
import { textSync } from 'figlet';
import Pomodoro from './Pomodoro/Pomodoro';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(textSync('Pomo', { horizontalLayout: 'default', verticalLayout: 'default', width: 40 }));

rl.question('What Interval length do you want?\n', (intervalLength: string) => {
    console.clear();
    rl.question('How many intervals do you want?\n', (numberOfIntervals: string) => {
        console.clear();
        const closeReadline = rl.close;
        const PomodoroInstance: Pomodoro = new Pomodoro(parseInt(intervalLength), parseInt(numberOfIntervals), 5, 15, closeReadline);
        PomodoroInstance.setPomodoro();
    });
});

rl.on('close', () => {
    process.exit(0);
});
