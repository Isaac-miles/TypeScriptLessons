import { useMemo, useReducer } from "react"

export type CartItemType = {
    sku:string,
    name:string,
    price:number,
    qty:number
}
type CartStateType = {cart:CartItemType[]}

const initCartState: CartStateType = {cart:[]}

const REDUCER_ACTION_TYPE = {
    ADD: 'ADD',
    REMOVE:'REMOVE',
    QUANTITY:'QUANTITY',
    SUBMIT:'SUBMIT'
}
export type ReducerCartActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction ={
    type:string,
    payload?: CartItemType
}

const reducer = (state:CartStateType, action:ReducerAction):CartStateType=>{
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD:{
            if(!action.payload){
                throw new Error ('action.payload missing in ADD action')
            }
            const {sku,name,price} = action.payload
            const filteredCart:CartItemType[]= state.cart.filter((item)=>item.sku !== sku) //list of items we are not adding to or updating
            const itemExists:CartItemType | undefined = state.cart.find(item=>item.sku === sku)
            const qty:number = itemExists ? itemExists.qty + 1 : 1 
            return {...state, cart:[...filteredCart,{sku,name,qty, price}]}

        }
        case REDUCER_ACTION_TYPE.REMOVE:{
                if(!action.payload){
                throw new Error ('action.payload missing in REMOVE action')
            }
            const {sku} = action.payload
            const filteredCart:CartItemType[]= state.cart.filter((item)=>item.sku !== sku) //list of items we are not adding to or updating
            return {...state, cart:[...filteredCart]}
        }

        case REDUCER_ACTION_TYPE.QUANTITY:{
            if(!action.payload){
                throw new Error ('action.payload missing in QUANTITY action')
            }
            const {sku,qty} = action.payload
            const itemExists:CartItemType | undefined = state.cart.find(item=>item.sku === sku)
            if(!itemExists){
                throw new Error('Item not in the cart')
            }

            const updatedItem:CartItemType = {...itemExists, qty}
            const filteredCart:CartItemType[]= state.cart.filter((item)=>item.sku !== sku) //list of items we are not adding to or updating
            return {...state, cart:[...filteredCart, updatedItem]}
        }
           
        case REDUCER_ACTION_TYPE.SUBMIT:{
            return {...state, cart:[]}
        }
        default:
            throw new Error('Unidentified Action Type')
    }
 
}

const useCartContext = (initCartState: CartStateType)=>{
    const [state, dispatch] = useReducer(reducer, initCartState)
    const REDUCER_ACTIONS = useMemo(()=>{
        return REDUCER_ACTION_TYPE
    },[])

    const totalItems = state.cart.reduce((preVal, cartItem)=>{
        return preVal + cartItem.qty
    },0)
}