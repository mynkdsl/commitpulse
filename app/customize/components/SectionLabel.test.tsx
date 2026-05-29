import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionLabel } from './SectionLabel';

describe('SectionLabel', () => {
  beforeEach(() => {
    render(<SectionLabel>Test Label</SectionLabel>);
  });

  it('renders the children text content', () => {
    render(<SectionLabel>Theme Preset</SectionLabel>);
    const el = screen.getByText('Theme Preset');
    expect(el).toBeTruthy();
  });

  it('renders a <p> element', () => {
    const el = screen.getByText('Test Label');
    expect(el.tagName).toBe('P');
  });

  it('<p> has the text-white/45 class', () => {
    const el = screen.getByText('Test Label');
    expect(el.className).toContain('text-white/45');
  });

  it('<p> has the uppercase class', () => {
    const el = screen.getByText('Test Label');
    expect(el.className).toContain('uppercase');
  });

  it('renders with special characters without crashing', () => {
    render(<SectionLabel>{'!@#$%^&*()'}</SectionLabel>);
    const el = screen.getByText('!@#$%^&*()');
    expect(el).toBeTruthy();
  });
});
