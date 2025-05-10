import moment from 'moment-timezone';
const location = 'Australia/Sydney';
const currentDateTime = moment().tz(location).format('YYYY-MM-DD HH:mm:ss');

console.log(`Current date and time in ${location}: ${currentDateTime}`);