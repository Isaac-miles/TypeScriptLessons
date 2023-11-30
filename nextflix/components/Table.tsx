import React from 'react'
import { ProductType } from '@/app/getProduct'


function Table({products}:{products:ProductType}) {
    console.log(products)
  return (
    <table>
        <tbody>
            <tr>
                <td>Monthly Price</td>
                {products?.map((product)=>(
                    <td className='tabledataFeature' key={product.priceId}>₦{product.priceInfo.unit_amount! /100000}k</td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table