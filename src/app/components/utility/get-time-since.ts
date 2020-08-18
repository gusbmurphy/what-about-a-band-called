const msInMinute = 60000;
const msInHour = msInMinute * 60;
const msInDay = msInHour * 24;
const msInYear = msInDay * 365;

export function getTimeSince(date: Date): string {
  const elapsedTime = Date.now() - date.getTime();
  if (elapsedTime < msInMinute) {
    return "1m";
  }
  if (elapsedTime < msInHour) {
    const numOfMinutes = Math.floor(elapsedTime / msInMinute);
    return `${numOfMinutes}m`;
  }
  if (elapsedTime < msInDay) {
    const numOfHours = Math.floor(elapsedTime / msInHour);
    const numOfMinutes = Math.floor((elapsedTime % msInHour) / msInMinute);
    let string = `${numOfHours}h`;
    if (numOfMinutes > 0) string += ` ${numOfMinutes}m`;
    return string;
  }
  if (elapsedTime < msInYear) {
    const numOfDays = Math.floor(elapsedTime / msInDay);
    return `${numOfDays}d`;
  }
  const numOfYears = Math.floor(elapsedTime / msInYear);
  const numOfDays = Math.floor((elapsedTime % msInYear) / msInDay);
  let string = `${numOfYears}y`;
  if (numOfDays > 0) string += ` ${numOfDays}d`;
  return string;
}
