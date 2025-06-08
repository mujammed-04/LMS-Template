import { capitalizeFirst } from '@lms/shared/utills/capitalizeFirst'

describe('capitalizeFirst', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
    expect(capitalizeFirst('world')).toBe('World');
  });

  it('should handle empty strings', () => {
    expect(capitalizeFirst('')).toBe('');
  });

  it('should handle single character strings', () => {
    expect(capitalizeFirst('a')).toBe('A');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalizeFirst('Hello')).toBe('Hello');
  });

  it('should handle strings with all uppercase letters', () => {
    expect(capitalizeFirst('HELLO')).toBe('Hello');
  });
}); 