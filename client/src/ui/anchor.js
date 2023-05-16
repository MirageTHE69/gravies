import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const Anchor = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  textTransform: 'capitalize',
  color: theme.palette.grey.main,
  transition: 'color .5s',

  '&:hover': {
    color: theme.palette.grey.dark,
  },
}));

export default Anchor;
