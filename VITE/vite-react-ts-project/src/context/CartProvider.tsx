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
            console.log()
        }
        case REDUCER_ACTION_TYPE.REMOVE:{
            console.log()
        }
        case REDUCER_ACTION_TYPE.QUANTITY:{
            console.log()
        }
        case REDUCER_ACTION_TYPE.SUBMIT:{
            console.log()
        }
        default:
            throw new Error('Unidentified actio ')
    }
}