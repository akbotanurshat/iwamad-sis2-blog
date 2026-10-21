import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import DashboardPage from '../pages/DashboardPage';
import SignInPage from '../pages/SignInPage';
import { test, expect } from 'vitest';

test('redirects to signin when not signed in', () => {
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/dashboard']}>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );
  
  // SignInPage-тегі h1 тегін іздейміз
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('Sign In');
});