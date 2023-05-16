import { Container, Stack, Typography, Divider, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Section } from 'ui';
import heroImg from 'assets/hero.jpg';
import About1 from 'assets/about-1.jpg';
import About2 from 'assets/about-2.jpg';
import About3 from 'assets/about-3.jpg';

const IndexPage = () => (
  <>
    <Header>
      <HeroFrame>
        <Typography textAlign='center' variant='h2'>
          About Us
        </Typography>
        <Typography textAlign='center' variant='h5'>
          A simple dummy text to get you started.
        </Typography>
      </HeroFrame>
    </Header>

    <main>
      <Section>
        <Container maxWidth='lg'>
          <Stack gap={3.5}>
            <Typography variant='h3'>We bring the world together</Typography>
            <Typography variant='h6' fontWeight={4}>
              Connection dots in the world
            </Typography>
            <Divider />

            <Grid container gap={{ md: 10, xs: 2 }}>
              <Grid item md={5} xs={12}>
                <ServiceText>
                  We have been delivering best quality products. Our team of
                  professionals is highly experienced and qualified to provide
                  the best services to our clients. We take pride in providing
                  high-quality products at affordable prices
                </ServiceText>
              </Grid>
              <Grid item md={5} xs={12}>
                <ServiceText>
                  We have a 24*7 customer care helpline number to assist you in
                  case of any query. We ship products worldwide including USA,
                  UK, Canada, Australia, UAE, Singapore etc.
                </ServiceText>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item lg={8} xs={12}>
              <GalleryPhoto src={About1} alt='GALLERY' />
            </Grid>

            <Grid item lg={12} xs={12}>
              <GalleryPhoto src={About2} alt='GALLERY' />
            </Grid>

            <Grid item lg={8} xs={12} ml='auto'>
              <GalleryPhoto src={About3} alt='GALLERY' />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Typography variant='h4' textAlign='center'>
          Our Philosophy
        </Typography>
        <Stack alignItems='center' mt={2}>
          <QuoteText
            variant='body1'
            color='grey.main'
            lineHeight={2}
            textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </QuoteText>
        </Stack>
      </Section>
    </main>
  </>
);

/////////////////////////////////////////////////////////////////////////////
const Header = styled('header')(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.neutral.white,

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0),
  },
}));

const HeroFrame = styled(Stack)({
  justifyContent: 'center',
  height: '90vh',
  backgroundImage: `url(${heroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const ServiceText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.grey.main,
  lineHeight: '2',
}));

const GalleryPhoto = styled('img')({
  height: '30rem',
  width: '100%',
  objectFit: 'cover',
});

const QuoteText = styled(Typography)(({ theme }) => ({
  width: '45%',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
  },
}));

export default IndexPage;
