const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000; // You can change the port number if needed

// Middleware to parse request body as JSON
app.use(express.json());

app.use(cors());

// Define a route to create a checkout session
app.post('/create-checkout-session', (req, res) => {
  // TODO: Implement Stripe checkout session creation logic here
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.post('/create-checkout-session', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          // Add your line items here
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Product 1',
                // Add other product details
              },
              unit_amount: 1000, // The price in the smallest currency unit (e.g., cents for USD)
            },
            quantity: 1, // Set the quantity of the product
          },
          // Add more line items if needed
        ],
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      });
  
      res.json({ sessionId: session.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  