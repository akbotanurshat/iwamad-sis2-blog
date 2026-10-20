import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <Header name="Ақбота Нұршат blog" role="Frontend Developer" />
      <main>
        <Outlet />
      </main>
      <Footer email="botanurrr@gmail.com" />
    </div>
  );
}