import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LikeButton from '../components/LikeButton';
import { test, expect } from 'vitest'; // Міне, бұл жол қосылды

test('like button changes text when clicked', async () => {
  render(<LikeButton />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('🤍 Like');
  
  await userEvent.click(button);
  expect(button).toHaveTextContent('❤️ Liked');
});