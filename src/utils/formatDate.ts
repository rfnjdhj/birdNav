/**
 * 格式化日期
 * @param date 日期对象或时间戳
 * @param format 格式化字符串，支持 YYYY、MM、DD、HH、mm、ss
 * @returns 格式化后的日期字符串
 */
export const formatDate = (
  date: Date | number = new Date(),
  format: string = 'YYYY-MM-DD HH:mm:ss'
): string => {
  const d = date instanceof Date ? date : new Date(date);
  
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

/**
 * 获取相对时间描述
 * @param date 日期对象或时间戳
 * @returns 相对时间描述，如"刚刚"、"5分钟前"、"昨天"等
 */
export const getRelativeTime = (date: Date | number): string => {
  const d = date instanceof Date ? date : new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (seconds < 60) return '刚刚';
  if (minutes < 60) return `${minutes}分钟前`;
  if (hours < 24) return `${hours}小时前`;
  if (days === 1) return '昨天';
  if (days < 7) return `${days}天前`;
  
  return formatDate(d, 'YYYY-MM-DD');
};
