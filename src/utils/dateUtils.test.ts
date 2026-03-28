import { describe, it, expect } from 'vitest';
import { formatDate } from './dateUtils';

describe('formatDate', () => {
  it('should format date with default format (YYYY-MM-DD)', () => {
    const date = new Date(2024, 0, 15);
    expect(formatDate(date)).toBe('2024-01-15');
  });

  it('should format date with custom format including time', () => {
    const date = new Date(2024, 5, 20, 14, 30, 45);
    expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-06-20 14:30:45');
  });

  it('should format date string input', () => {
    expect(formatDate('2024-12-25')).toBe('2024-12-25');
  });

  it('should format timestamp input', () => {
    const timestamp = new Date(2024, 0, 1).getTime();
    expect(formatDate(timestamp)).toBe('2024-01-01');
  });

  it('should throw error for invalid date', () => {
    expect(() => formatDate('invalid-date')).toThrow('Invalid date');
  });
});
