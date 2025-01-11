# MERN E-commerce Application with PayPal Integration

A full-stack MERN (MongoDB, Express.js, React, Node.js) e-commerce application with PayPal payment integration. This project allows users to browse products, add them to their cart, and complete purchases securely using PayPal.

## Features:
- User authentication (Registration, Login, Logout)
- Admin dashboard for managing products and orders
- Product listing with dynamic search and filtering
- Cart management and checkout flow
- PayPal integration for secure payment processing
- Responsive and modern UI using React and Material-UI

## Technologies:
- **Frontend**: React, React Router, Material-UI
- **Backend**: Node.js, Express.js, MongoDB
- **Payment Gateway**: PayPal (via PayPal SDK)
- **Authentication**: JWT (JSON Web Token)
- **State Management**: Redux

## Getting Started:
### Prerequisites:
1. Node.js (version 14 or higher)
2. MongoDB (local or cloud instance)
3. PayPal Developer Account (for obtaining client ID and secret keys)

### Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-ecommerce.git
   ```

2. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd client
   npm install
   ```

4. Configure PayPal credentials in the backend (`server/config/paypal.js`) using your PayPal **Client ID** and **Secret**.

5. Start the server:
   ```bash
   cd server
   npm start
   ```

6. Start the frontend:
   ```bash
   cd client
   npm start
   ```

### Payment Integration:
- Use PayPal's sandbox environment for testing payments before going live.
- Ensure the client ID and secret are correctly set up in the environment.

## Screenshots:

![Home Page]![image](https://github.com/user-attachments/assets/8ad549f9-a58b-4f3e-9abb-6a9c1c25bd2a)

![Login page]![image](https://github.com/user-attachments/assets/b6a58dd8-3bc1-4ea9-ba35-818ce6022f18)



## License:
This project is licensed under the MIT License.
