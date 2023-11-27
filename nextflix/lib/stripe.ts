import { createCheckoutSession,getStripePayments } from "@stripe/firestore-stripe-payments";
import { getFunctions,HttpsCallable } from "firebase/functions";
import app
 from "./firebase";