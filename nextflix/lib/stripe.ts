
import { createCheckoutSession,getStripePayments } from "@stripe/firestore-stripe-payments";
import app from "./firebase";
import { getProduct } from "@/app/stripe-util/getStripesUtils";
 const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "customers",
  });

  const payment = await getProduct()
 export const loadCheckout = async (priceId:string) => {
    await createCheckoutSession(payment, {
        price:priceId,
        success_url:window.location.origin,
        cancel_url:window.location.origin
    })
    .then((snapshot)=>window.location.assign(snapshot.url))
    .catch((err)=>console.log(err.message))
 }

 export default payments
