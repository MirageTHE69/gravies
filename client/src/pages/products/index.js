import { useState } from 'react';
import { Grid, Typography, Tabs, Tab, Stack } from '@mui/material';
import Product from 'components/product';
import products from 'data/products.json';

const ProductsGroup = ({ filter }) => (
  <Grid
    container
    spacing={{ md: 5, xs: 2.5 }}
    padding={{ md: 5, xs: 2.5 }}
    mb={8}>
    {products
      .filter(p => p.category.id === filter - 1 || filter === 0)
      .map(product => (
        <Grid item md={4} xs={12} key={product.id}>
          <Product
            title={product.title}
            id={product.id}
            link={`/products/${product.id}`}
          />
        </Grid>
      ))}
  </Grid>
);

const ProductsPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (_event, nextTab) => {
    setCurrentTab(nextTab);
  };

  return (
    <main>
      <Typography variant='h4' textAlign='center' mt={8}>
        Our Products
      </Typography>

      <Stack alignItems='center' my={5}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label='CATEGORY TABS'>
          <Tab label='All' />
          <Tab label='Red Gravy' />
          <Tab label='Green Gravy' />
          <Tab label='White Gravy' />
        </Tabs>
      </Stack>

      <ProductsGroup filter={currentTab} />
    </main>
  );
};

export default ProductsPage;
