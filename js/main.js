document.addEventListener('DOMContentLoaded', () => {
    createYearWheel();

    // Auto-select current month
    const currentMonthIndex = new Date().getMonth(); // 0-11
    const currentMonthData = yearWheelData[currentMonthIndex];
    if (currentMonthData) {
        selectMonth(currentMonthData);
    }
});
