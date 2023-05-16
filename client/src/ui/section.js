import { styled } from '@mui/system';

const Section = styled('section')(({ theme, offwhite }) => ({
  padding: theme.spacing(10, 3),
  backgroundColor: offwhite
    ? theme.palette.grey.light
    : theme.palette.neutral.white,

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 1),
  },
}));

export default Section;
