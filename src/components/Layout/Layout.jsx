import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from '../Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { ScrollToTopButton } from 'components/ScrollUp/ScrollToTopButton';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ScrollToTopButton />
    </Container>
  );
};
export default Layout;
