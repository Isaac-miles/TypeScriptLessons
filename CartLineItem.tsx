import React, { ChangeEvent, ReactElement,memo } from 'react'
import { CartItemType } from '../context/CartProvider'
import { ReducerAction } from '../context/CartProvider'
import { ReducerCartActionType } from '../context/CartProvider'
type PropsType = {
    item:CartItemType,
    dispatch:React.Dispatch<ReducerAction>
    REDUCER_ACTIONS:ReducerCartActionType
}

 const CartLineItem = ({item,dispatch, REDUCER_ACTIONS}:PropsType) => {
    const img:string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href
    
    const lineTotal:number = (item.qty * item.price)
    const highestQTy:number = 20 > item.qty ? 20 : item.qty
    const optionValues:number[]= [...Array(highestQTy).keys()].map(i => i + 1)
    const options:ReactElement[] = optionValues.map(val =>{
        return <option key={`opt${val}`} value={val}>{val}</option>
    })
    const onChangeQty = (e:ChangeEvent<HTMLSelectElement>)=>{
        dispatch({
            type:REDUCER_ACTIONS.QUANTITY,
            payload:{...item, qty:+(e.target.value)}
        })
    }

    const onRemoveFromCart=()=>dispatch({
        type:REDUCER_ACTIONS.REMOVE,
        payload:item
    })

    const content = (
        <li className="cart__item">
            <img src={img} alt={item.name} className="cart__img" />
            <div aria-label='Item Name'>{item.name}</div>
            <div aria-label='Price per Item'>{new Intl.NumberFormat('en-Us', {style:'currency', currency:'NGN'}).format(item.price)}</div>

            <label htmlFor='itmemQty' className='offscreen'>Item Quantity</label>
            <select
             name="itemQty"
             id="itemQty" 
             className="cart__select"
             value={item.qty}
             aria-label="Item Quantity"
             onChange={onChangeQty}>
                {options}
             </select>

             <div className="cart__subtotal" aria-label="Line Item Subtotal">
             {new Intl.NumberFormat('en-Us', {style:'currency', currency:'NGN'}).format(lineTotal)}
             <button
                className="cart__button"
                aria-label="Remove Item From Cart"
                title="Remove Item From Cart"
                onClick={onRemoveFromCart}
            >
                ❌
            </button>
             </div>
        </li>
    )
  return content
}
function areItemsEqual({item:prevItem}:PropsType, {item:NextItem}:PropsType){
    return Object.keys(prevItem).every(key=>{
        return prevItem[key as keyof CartItemType] === NextItem[key as keyof CartItemType]
    })
}
const MomoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem,areItemsEqual);


export default MomoizedCartLineItem;