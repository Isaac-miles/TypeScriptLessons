import { createContext,ReactElement, useState} from "react"

export type ProductType = {
    sku:string,
    name:string,
    price:number
}

const initState:ProductType[] =[
    {
        "sku":"item001",
        "name":"widget",
        "price":10
    }
]

export type UseProductsContextType = {products:ProductType[]}
const initContextState: UseProductsContextType = {products:[]}
type ChildrenType = {children?:ReactElement | ReactElement[]}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

export const ProductProvider = ({children}:ChildrenType):ReactElement=>{
    const [products, setProducts] = useState<ProductType[]>(initState)
}