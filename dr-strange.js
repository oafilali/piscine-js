const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday"
];

const addWeek = (date) => {
    let epoch = new Date("0001-01-01");
    let daysDiff = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
    return days[daysDiff % 14];
}

console.log(addWeek(new Date('0001-01-05')));

const timeTravel = ({ date, hour, minute, second }) => {
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return date;
}

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString())
