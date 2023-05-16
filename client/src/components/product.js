import { Link } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Product = ({ title, id, link }) => (
  <Card>
    <Link to={link}>
      <CardImage
        src={`https://res.cloudinary.com/dxeb4jubk/image/upload/v1683804451/Images/products/${id}.jpg`}
        alt='PRODUCT'
      />
      <CardTitle>{title}</CardTitle>
    </Link>
  </Card>
);

/////////////////////////////////////////////////////////////////////////////
const Card = styled(Paper)({
  position: 'relative',
  minHeight: '40rem',
});

const CardImage = styled('img')({
  position: 'absolute',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  transition: 'opacity .5s',

  '&:hover': {
    opacity: 0.9,
  },
});

const CardTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  position: 'absolute',
  bottom: '2rem',
  left: '2rem',
  textTransform: 'uppercase',
  color: theme.palette.neutral.white,
}));

export default Product;
