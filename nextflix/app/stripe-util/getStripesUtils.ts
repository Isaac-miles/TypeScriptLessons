import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';


export async function getProduct() {

    // create a query object
const q = query(
    collection(db, 'products'), 
    where('active', '==', true)
);

const querySnapshot = await getDocs(q);


// for each product, get the product price info
const productsPromises = querySnapshot.docs.map(async (productDoc) => {
    let productInfo = productDoc.data();

    // fetch prices subcollection per product
    const pricesCollection = collection(productDoc.ref, 'prices');
    const priceQuerySnapshot = await getDocs(pricesCollection);

    // assume there is only one price per product
    const priceDoc = priceQuerySnapshot.docs[0];
    productInfo['priceId'] = priceDoc.id;
    productInfo['priceInfo'] = priceDoc.data();
    return productInfo;
});

// 'products' is an array of products (including price info)
 const products = await Promise.all(productsPromises);

       return products

}

export async function loadCheckout(priceId:string) {
    const docRef = await db.collection("customers").doc(user.uid).collection("checkout_session").add({
        priceId,
        success_url:window.location.origin,
        cancel_url:window.location.origin
    })
    docRef.onSnapshot(async(snap)=>(
        const {error, sessionId} = snap.data();
        if(error){
            alert(error.message)
        }
    ))
}

export type ProductType = Awaited<ReturnType< typeof getProduct>>
export type ProductElementType = ProductType[0]
