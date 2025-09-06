import Stripe from "stripe";
import { json } from "@sveltejs/kit";
import { STRIPE_API_KEY, PRICE_ID } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";

const stripe = new Stripe(STRIPE_API_KEY);
console.log(stripe);
console.log(STRIPE_API_KEY);
console.log(PRICE_ID);

export const POST = async() => {
    try{
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
        console.log(error);
        return json({error})
    }

}