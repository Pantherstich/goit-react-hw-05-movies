import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
