import stripe from 'stripe';
require('dotenv').config();

export const createUser = (data: {}) => {
  console.log('Working fine with env::: ', process.env.PORT);
};
