import {getApp} from "@firebase/app"
import {getStripePayments} from "@invertase/firestore-stripe-payments"


const app = getApp();
const payments = getStripePayments(app,{
    productsCollection:"products",
    customersCollection:"customers"
})








// import { createCheckoutSession,getStripePayments } from "@stripe/firestore-stripe-payments";
// import app from "./firebase";

//  const payments = getStripePayments(app, {
//     productsCollection: "products",
//     customersCollection: "customers",
//   });

//  export const loadCheckout =async (priceId:string) => {
//     await createCheckoutSession(payments, {
//         price:priceId,
//         success_url:window.location.origin,
//         cancel_url:window.location.origin
//     })
//     .then((snapshot)=>window.location.assign(snapshot.url))
//     .catch((err)=>console.log(err.message))
//  }

//  export default payments