function weekday(str) {

    let L = str.toLowerCase();
    let weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    for (let i = 0; i < weekdays.length; i++) {
        if (weekdays[i] === L) {
            return i;
        }
    }
    return 0;
}
console.log(weekday('Sunday'));    
console.log(weekday('Tuesday'));   
console.log(weekday('Friday'));    