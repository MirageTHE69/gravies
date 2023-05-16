import { Grid, Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
import logo from 'assets/logo.png';
import { Anchor } from 'ui';

const Footer = () => (
  <Foot>
    <Grid
      container
      justifyContent='center'
      columnGap={5}
      rowGap={10}
      textAlign='center'>
      <Grid item md={2} xs={12}>
        <Logo src={logo} alt='LOGO' />
      </Grid>

      <Grid item md={2} xs={12}>
        <Stack gap={3}>
          <Typography textTransform='uppercase'>menu</Typography>
          <Anchor to='#'>home</Anchor>
          <Anchor to='#'>about</Anchor>
          <Anchor to='#'>products</Anchor>
          <Anchor to='#'>blog</Anchor>
        </Stack>
      </Grid>

      <Grid item md={2} xs={12}>
        <Stack gap={3}>
          <Typography textTransform='uppercase'>categories</Typography>
          <Anchor to='#'>home</Anchor>
          <Anchor to='#'>about</Anchor>
          <Anchor to='#'>products</Anchor>
          <Anchor to='#'>blog</Anchor>
        </Stack>
      </Grid>

      <Grid item md={2} xs={12}>
        <Stack gap={3}>
          <Typography textTransform='uppercase'>help</Typography>
          <Anchor to='#'>home</Anchor>
          <Anchor to='#'>about</Anchor>
          <Anchor to='#'>products</Anchor>
          <Anchor to='#'>blog</Anchor>
        </Stack>
      </Grid>

      <Grid item md={2} xs={12}>
        <Stack gap={3}>
          <Typography textTransform='uppercase'>follow</Typography>
          <Anchor to='#'>home</Anchor>
          <Anchor to='#'>about</Anchor>
          <Anchor to='#'>products</Anchor>
          <Anchor to='#'>blog</Anchor>
        </Stack>
      </Grid>
    </Grid>
  </Foot>
);

/////////////////////////////////////////////////////////////////////////////
const Foot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 5),
}));

const Logo = styled('img')({
  width: '6rem',
});

export default Footer;
