import { describe, it, expect } from 'vitest';
import { CATEGORY_LABELS } from './constants';

describe('CATEGORY_LABELS', () => {
  it('should have the correct labels for each category', () => {
    expect(CATEGORY_LABELS).toEqual({
      skills: 'Skills',
      projects: 'Projects',
      work: 'Work Experience',
      ideas: 'Ideas',
      education: 'Education'
    });
  });
});
