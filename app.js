// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  return dayOfWeek;
}

// Function to display current UTC time in milliseconds
function getCurrentUTCTime() {
  const currentTimeInMillis = new Date().getTime();
  return currentTimeInMillis;
}

// Update the page elements with dynamic data
document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day of the Week: ${getCurrentDayOfTheWeek()}`;
document.querySelector(
  '[data-testid="currentUTCTime"]'
).textContent = `Current UTC Time (milliseconds): ${getCurrentUTCTime()}`;
