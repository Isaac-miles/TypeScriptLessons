import React from 'react'
import { ProductType } from '@/app/getProduct'


function Table({products}:{products:ProductType}) {
    console.log(products)
  return (
    <table>
        <tbody className='divide-y divide-[grey]'>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Monthly Price</td>
                {products?.map((product)=>(
                    <td className='tabledataFeature' key={product.priceId}>₦{product.priceInfo.unit_amount! /100000}k</td>
                ))}
            </tr>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Video Quality</td>
                {products?.map((product)=>(
                    <td className='tabledataFeature' key={product.priceId}>{product.metadata.videoQuality }</td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table