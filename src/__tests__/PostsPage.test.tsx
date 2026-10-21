import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PostsPage from '../pages/PostsPage';
import { posts } from '../data/posts';
import { test, expect } from 'vitest'; // Міне, бұл жол қосылды

test('renders one card per post in the array', () => {
  render(
    <MemoryRouter>
      <PostsPage />
    </MemoryRouter>
  );
  const headings = screen.getAllByRole('heading', { level: 2 });
  expect(headings).toHaveLength(posts.length);
});