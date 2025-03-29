// 将时间字符串解析为Date对象的函数
function parseTime(timeStr: string): Date {
  return new Date(timeStr);
}

// 计算两个日期时间对象的时间差，返回包含天、时、分、秒的对象
function calculateTimeDiff(
  startTime: string,
  endTime: string = new Date().toISOString()
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const start = parseTime(startTime);
  const end = parseTime(endTime);
  const diffInMs = end.getTime() - start.getTime();
  const totalSeconds = Math.floor(diffInMs / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const remainingSeconds = totalSeconds % (24 * 60 * 60);
  const hours = Math.floor(remainingSeconds / (60 * 60));
  const remainingSecondsAfterHours = remainingSeconds % (60 * 60);
  const minutes = Math.floor(remainingSecondsAfterHours / 60);
  const seconds = remainingSecondsAfterHours % 60;
  return { days, hours, minutes, seconds };
}

export function useTimeDiff(
  startTime: string,
  endTime: string = new Date().toISOString()
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  return calculateTimeDiff(startTime, endTime);
}
