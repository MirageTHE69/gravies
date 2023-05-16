import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Layout from 'components/layout';
import { theme } from 'ui';
import IndexPage from 'pages';
import AboutPage from 'pages/about';
import ProductsPage from 'pages/products';
import ProductDetailsPage from 'pages/products/id';
import CertificatesPage from 'pages/certificates';

const ScrollToTopProvider = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window && window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return children;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTopProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<IndexPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/products/:id' element={<ProductDetailsPage />} />
              <Route path='/certificates' element={<CertificatesPage />} />
            </Routes>
          </Layout>
        </ScrollToTopProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
