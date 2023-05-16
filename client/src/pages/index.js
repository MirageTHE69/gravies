import { Container, Stack, Typography, Divider, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Section } from 'ui';
import products from 'data/products.json';
import Product from 'components/product';
import heroImg from 'assets/hero.jpg';

const IndexPage = () => (
  <>
    <Header>
      <HeroFrame>
        <Typography textAlign='center' variant='h2'>
          here we are with special magic indian masalas
        </Typography>
        <Typography textAlign='center' variant='h5'>
          make you food with us quickly
        </Typography>
      </HeroFrame>
    </Header>

    <main>
      <Section>
        <Container maxWidth='lg'>
          <Stack gap={3.5}>
            <Typography variant='h3'>
              Make Authentic Indian Cuisine at Home with Our Ready-to-Cook Gravy
            </Typography>
            <Typography variant='h6' fontWeight={300}>
              Connection dots of your taste
            </Typography>
            <Divider />

            <Grid container gap={{ md: 10, xs: 2 }}>
              <Grid item md={5} xs={12}>
                <ServiceText>
                  Our ready-to-cook gravy is the perfect way to enjoy the
                  flavors of Punjab without having to spend hours in the
                  kitchen. Simply add your favorite protein and vegetables, and
                  you'll have a delicious and authentic Indian meal in no time.
                  Our gravy is made with fresh, high-quality ingredients and no
                  artificial flavors or preservatives. So you can be sure that
                  you're getting a healthy and flavorful meal that the whole
                  family will love
                </ServiceText>
              </Grid>
              <Grid item md={5} xs={12}>
                <ServiceText>
                  Indulge in the flavors of Punjab with our ready-to-cook gravy!
                  Our gravy is made with fresh, high-quality ingredients and no
                  artificial flavors or preservatives. So you can be sure that
                  you're getting a healthy and flavorful meal that the whole
                  family will love. Simply add your favorite protein and
                  vegetables, and you'll have a delicious and authentic Indian
                  meal in no time. Order your ready-to-cook gravy today and
                  start enjoying the flavors of Punjab!
                </ServiceText>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Typography variant='h4' textAlign='center'>
          Featured Products
        </Typography>
        <Typography variant='h6' fontWeight={300} textAlign='center'>
          Check out new and popular products
        </Typography>

        <Container maxWidth='xl'>
          <Grid container spacing={4} mt={5}>
            {products.slice(0, 3).map(product => (
              <Grid item md={4} xs={12} key={product.id}>
                <Product
                  id={product.id}
                  title={product.title}
                  link={`/products/${product.id}`}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  </>
);

/////////////////////////////////////////////////////////////////////////////
const Header = styled('header')(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.neutral.white,

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  }
}));

const HeroFrame = styled(Stack)({
  justifyContent: 'center',
  height: '90vh',
  backgroundImage: `url(${heroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});

const ServiceText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.grey.main,
  lineHeight: '2'
}));

export default IndexPage;
