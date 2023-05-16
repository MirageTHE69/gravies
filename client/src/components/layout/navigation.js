import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Stack,
  Button,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { Anchor } from 'ui';
import logo from 'assets/logo.png';

const Navigation = () => {
  const isMobileDevice = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [openMobileNav, setOpenMobileNav] = useState();
  const toggleMobileNav = visibility => () => setOpenMobileNav(visibility);

  return (
    <>
      <Nav position='static'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
          <Link to='/'>
            <Logo src={logo} alt='LOGO' width={100} height={80}/>
          </Link>

          {isMobileDevice ? (
            <NavButton onClick={toggleMobileNav(true)}>
              <Typography variant='h2'>&#8801;</Typography>
            </NavButton>
          ) : (
            <Stack direction='row' alignItems='center' gap={5}>
              <Anchor to='/'>home</Anchor>
              <Anchor to='/products'>products</Anchor>
              <Anchor to='/'>about</Anchor>
            </Stack>
          )}
        </Stack>
      </Nav>

      <Drawer
        open={openMobileNav}
        anchor='top'
        onClose={toggleMobileNav(false)}>
        <MobileNav>
          <Stack alignItems='flex-end' px={2}>
            <NavButton onClick={toggleMobileNav(false)}>
              <Typography variant='h4'>&times;</Typography>
            </NavButton>
          </Stack>

          <List>
            <MobileNavItem>
              <Anchor to='/' onClick={toggleMobileNav(false)}>
                home
              </Anchor>
            </MobileNavItem>
            <MobileNavItem>
              <Anchor to='/products' onClick={toggleMobileNav(false)}>
                products
              </Anchor>
            </MobileNavItem>
            <MobileNavItem>
              <Anchor to='/about' onClick={toggleMobileNav(false)}>
                about
              </Anchor>
            </MobileNavItem>
            <MobileNavItem>
              <Anchor to='/certificates' onClick={toggleMobileNav(false)}>
                certificates
              </Anchor>
            </MobileNavItem>
          </List>
        </MobileNav>
      </Drawer>
    </>
  );
};

/////////////////////////////////////////////////////////////////////////////
const Nav = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.white,
  boxShadow: 'none',
  padding: theme.spacing(2, 5, 1)
}));

const Logo = styled('img')({
  width: '4rem',
});

const MobileNav = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const MobileNavItem = styled(ListItem)({
  display: 'flex',
  justifyContent: 'center',
});

const NavButton = styled(Button)({
  minHeight: '2.5rem',
  minWidth: '2.5rem',
  padding: 0,
});

export default Navigation;
