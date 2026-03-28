import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CurrentTime from './index';

describe('CurrentTime Component', () => {
  it('should render time and date elements', () => {
    render(<CurrentTime />);
    
    const container = screen.getByStyle({ textAlign: 'right' });
    expect(container).toBeInTheDocument();
  });
});
