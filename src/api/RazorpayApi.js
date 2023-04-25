import axios from 'axios';
import Base64 from 'Base64';

export const getPaymentLink = (amount, currency, customerDetails, id) => {
    const username = 'YOUR_KEY_ID';
    const password = 'YOUR_KEY_SECRET';
  
    const body = {
      amount: amount,
      currency: currency,
      description: "Razorpay Demo",
      customer: {
        name: `${customerDetails.name} ${customerDetails.name}`,
        contact: `${customerDetails.contact}`,
        email: `${customerDetails.email}`
      },
      notes: {
        orderId: id
      },
      options: {
        checkout: {
          name: "Razorpay Demo"
        }
      },
      callback_url: "https://your-server/callback_url",
      callback_method: "get"
    }
    const headers = {
      Authorization: `Basic ${Base64.btoa(username + ':' + password)}`
    }
  
  
    return (axios.post('https://api.razorpay.com/v1/payment_links/', body, {headers: headers}));
  }