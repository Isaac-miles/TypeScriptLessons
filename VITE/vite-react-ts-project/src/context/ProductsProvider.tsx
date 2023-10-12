import { createContext,ReactElement, useState, useEffect} from "react"

export type ProductType = {
    sku:string,
    name:string,
    price:number
}

const initState:ProductType[]=[]

// const initState:ProductType[] =[
//     {
//         "sku":"item001",
//         "name":"widget",
//         "price":10
//     }
// ]

export type UseProductsContextType = {products:ProductType[]}
const initContextState: UseProductsContextType = {products:[]}
type ChildrenType = {children?:ReactElement | ReactElement[]}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

export const ProductProvider = ({children}:ChildrenType):ReactElement=>{
    const [products, setProducts] = useState<ProductType[]>(initState)
    useEffect(()=>{
        const fetchProducts = async ():Promise<ProductType[]> =>{
            const data = await fetch('http://localhost:3500/products')
            .then(res=>{
              return res.json()
            } ).catch(err=>{
                if( err instanceof Error)console.log(err.message)
            })
        return data
        }
        fetchProducts().then(products=>setProducts(products))
    },[])
    return (
        <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
    )
}

export default ProductsContext