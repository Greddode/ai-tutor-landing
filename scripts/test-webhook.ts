import { createHmac } from 'crypto';
import fetch from 'node-fetch';

const webhookSecret = 'whsec_eUk89mfRTtNFU1kadGI0tn7C5afxpdBI';
const endpoint = 'https://v0-next-js-landing-page-three-plum.vercel.app/api/webhooks/stripe';

async function testWebhook() {
  // Create a test event
  const testEvent = {
    id: 'evt_test_webhook',
    object: 'event',
    type: 'customer.subscription.created',
    data: {
      object: {
        id: 'sub_test',
        object: 'subscription',
        current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // 30 days from now
        status: 'active',
        items: {
          data: [{
            price: {
              id: 'price_supporter'
            }
          }]
        },
        customer: 'cus_test',
        metadata: {
          userId: 'test_user_id'
        }
      }
    }
  };

  // Create the signature
  const timestamp = Math.floor(Date.now() / 1000);
  const payload = JSON.stringify(testEvent);
  const signature = createHmac('sha256', webhookSecret)
    .update(`${timestamp}.${payload}`)
    .digest('hex');

  console.log('Sending webhook test with:');
  console.log('Endpoint:', endpoint);
  console.log('Timestamp:', timestamp);
  console.log('Signature:', signature);
  console.log('Payload:', payload);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Stripe-Signature': `t=${timestamp},v1=${signature}`
      },
      body: payload
    });

    console.log('\nResponse:');
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Headers:', JSON.stringify(Object.fromEntries(response.headers.entries()), null, 2));
    console.log('Body:', await response.text());
  } catch (error) {
    console.error('Error testing webhook:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Stack trace:', error.stack);
    }
  }
}

testWebhook(); 