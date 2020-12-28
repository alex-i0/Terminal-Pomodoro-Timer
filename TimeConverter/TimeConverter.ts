class TimeConverter {
    private secondInMiliseconds: number = 1000;
    private minuteInMiliseconds: number = 60 * this.secondInMiliseconds;

    public minutesToMiliseconds = (minutes) => {
        return minutes * this.minuteInMiliseconds;
    };

    public secondsToMiliseconds = (seconds) => {
        return seconds * this.secondInMiliseconds;
    };
}

export default TimeConverter;
