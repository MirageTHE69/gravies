import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Stack, styled, Typography, Button } from '@mui/material';
import products from 'data/products.json';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N82dlSCZagzWk1mb312Gsvise2yK8KKd5TTrQKyPJa2QP8WtqA6HFKp4yhARTirq9MJ51HXoTWD0aqYZ3MdKiNA00uLLgTKP7');

const ProductDetailsPage = () => {
  const params = useParams();
  const product = products.find(p => p.id === +params.id);
  const navigate = useNavigate();

  const handlePayment = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch('http://localhost:8000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id }),
        mode: 'cors', // Add this option for CORS
      });
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log(result.error.message);
      } else {
        // Redirect to checkout page after successful payment
        navigate('/checkout');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid container spacing={5} padding={{ sm: 5, xs: 0 }} mb={8}>
        <Grid item md={6} xs={12}>
          <ProductImage
            src={`https://res.cloudinary.com/dxeb4jubk/image/upload/v1683804451/Images/products/${params.id}.jpg`}
            alt='PRODUCT'
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ProductData spacing={2}>
            <Typography variant='h3'>{product.title}</Typography>
            <Typography variant='body1' color='grey.main'>
              {product.description}
              <span>Price 180</span>
            </Typography>
            <span>Price 180</span>
            <Button variant='contained' color='primary' onClick={handlePayment}>
              Add to Cart
            </Button>
          </ProductData>
        </Grid>
      </Grid>
    </>
  );
};

const ProductImage = styled('img')({
  width: '100%',
  height: '45rem',
  objectFit: 'cover',
});

const ProductData = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(5),
  minHeight: '40rem',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 3),
    minHeight: 'auto',
  },
}));

export default ProductDetailsPage;
