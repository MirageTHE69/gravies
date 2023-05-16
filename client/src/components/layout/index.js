import GetInTouch from 'components/get-in-touch';
import Footer from './footer';
import Navigation from './navigation';

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
    <GetInTouch />
    <Footer />
  </>
);

export default Layout;
