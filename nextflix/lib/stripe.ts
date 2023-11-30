import {getApp} from "@firebase/app"
import {getStripePayments,getProducts} from "@invertase/firestore-stripe-payments"


const app = getApp();
export const payments = getStripePayments(app,{
    productsCollection:"products",
    customersCollection:"customers"
})

 const products = await getProducts(payments,{
    includePrices:true,
    activeOnly:true
})


export default products



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