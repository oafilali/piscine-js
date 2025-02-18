function firstDayWeek(week, year) {
    const firstDay = new Date(year, 0, 1);
    const dayOfWeek = firstDay.getDay();
    const diff = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    firstDay.setDate(firstDay.getDate() - diff);

    // If the first Monday is in the previous year, return the first day of the given year
    if (firstDay.getFullYear() < year) {
        firstDay.setFullYear(year, 0, 1);
        firstDay.setDate(1);  // Set to the 1st of January
    }

    firstDay.setDate(firstDay.getDate() + (week - 1) * 7);

    const day = String(firstDay.getDate()).padStart(2, '0');
    const month = String(firstDay.getMonth() + 1).padStart(2, '0');
    const yearFormatted = firstDay.getFullYear();

    return `${day}-${month}-${yearFormatted}`;
}

console.log(firstDayWeek(1, "1000")); // Should return '01-01-1000'