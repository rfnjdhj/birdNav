import { formatDate, getRelativeTime } from '../formatDate';

describe('formatDate', () => {
  const fixedDate = new Date('2026-03-28T12:34:56');

  it('should format date with default format', () => {
    expect(formatDate(fixedDate)).toBe('2026-03-28 12:34:56');
  });

  it('should format date with custom format', () => {
    expect(formatDate(fixedDate, 'YYYY-MM-DD')).toBe('2026-03-28');
    expect(formatDate(fixedDate, 'MM/DD/YYYY')).toBe('03/28/2026');
    expect(formatDate(fixedDate, 'HH:mm')).toBe('12:34');
  });

  it('should handle timestamp input', () => {
    expect(formatDate(fixedDate.getTime())).toBe('2026-03-28 12:34:56');
  });
});

describe('getRelativeTime', () => {
  const now = new Date();

  it('should return "刚刚" for recent time', () => {
    const recentTime = new Date(now.getTime() - 30 * 1000); // 30 seconds ago
    expect(getRelativeTime(recentTime)).toBe('刚刚');
  });

  it('should return minutes ago', () => {
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000); // 5 minutes ago
    expect(getRelativeTime(fiveMinutesAgo)).toBe('5分钟前');
  });

  it('should return hours ago', () => {
    const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago
    expect(getRelativeTime(twoHoursAgo)).toBe('2小时前');
  });

  it('should return "昨天" for yesterday', () => {
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 1 day ago
    expect(getRelativeTime(yesterday)).toBe('昨天');
  });

  it('should return formatted date for older dates', () => {
    const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000); // 10 days ago
    const formatted = formatDate(tenDaysAgo, 'YYYY-MM-DD');
    expect(getRelativeTime(tenDaysAgo)).toBe(formatted);
  });
});
