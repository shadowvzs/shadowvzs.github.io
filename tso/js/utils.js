const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

const getFormatedDuration = (timestamp) => {
    const output = [];
    if (timestamp >= WEEK) {
        const weeks = Math.floor(timestamp / WEEK);
        output.push(`${weeks}w`);
        timestamp -= weeks * WEEK;
    }
    if (timestamp >= DAY) {
        const days = Math.floor(timestamp / DAY);
        output.push(`${days}d`);
        timestamp -= days * DAY;
    }
    if (timestamp >= HOUR) {
        const hours = Math.floor(timestamp / HOUR);
        output.push(`${hours}h`);
        timestamp -= hours * HOUR;
    }
    if (timestamp >= MINUTE) {
        const minutes = Math.floor(timestamp / MINUTE);
        output.push(`${minutes}m`);
        timestamp -= minutes * MINUTE;
    }
    if (timestamp > 0) {
        output.push(`${timestamp}s`);
    }
    return output.join(', ');
};