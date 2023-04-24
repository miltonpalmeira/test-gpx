export function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return { hours: timeFormat(hours), minutes: timeFormat(minutes), seconds:timeFormat(seconds) };
}

export function timeFormat(time: number) {
  return time < 10 ? '0' + time : String(time);
}