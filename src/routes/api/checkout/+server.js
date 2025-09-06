import Stripe from "stripe";
import { json } from "@sveltejs/kit";
import { STRIPE_API_KEY, PRICE_ID } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";

const stripe = new Stripe(STRIPE_API_KEY);

export const POST = async() => {
    try{

        if (!STRIPE_API_KEY || !PRICE_ID) {
        // Fail loudly if envs are missing
        console.error('Missing STRIPE_API_KEY or PRICE_ID');
        return json({ error: 'Server not configured' }, { status: 500 });
        }
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price: PRICE_ID,
                quantity: 1
            }
        ],
        mode: "payment",
        success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
        cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`
    });

    return json({sessionId: session.id});
    } catch(error){
        console.error('checkout error', error);
        // Return a 500 and a plain string message
        return json({ error: error.message ?? 'Internal error' }, { status: 500 });
    }

}