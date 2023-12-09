
import { createCheckoutSession,getStripePayments } from "@stripe/firestore-stripe-payments";
import app from "./firebase";


 const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "customers",
  });

  console.log(payments)
 export const loadCheckout = async (priceId:string) => {
    await createCheckoutSession(payments, {
        price:priceId,
        success_url:window.location.origin,
        cancel_url:window.location.origin
    })
    .then((snapshot)=>window.location.assign(snapshot.url))
    .catch((err)=>console.log(err.message))
 }

//  export default payments

 import { getProducts } from "@stripe/firestore-stripe-payments";


 export const getProductz = async () => {
    await await getProducts(payments, {
        includePrices: true,
        activeOnly: true,
      });
      
 }
