import React from 'react'
import { ProductType,ProductElementType } from '@/app/getProduct'
import { CheckIcon } from '@heroicons/react/20/solid'

interface TableProps {
    products:ProductType
    selectedPlan:ProductElementType
}

function Table({products, selectedPlan}:TableProps) {

  return (
    <table>
        <tbody className='divide-y divide-[grey]'>
            <tr className='tableRow'>
                <td className="tableDataTitle">Monthly Price</td>
                {products?.map((product)=>(
                    <td className={`tableDataFeature ${selectedPlan.priceId=== product.priceId? "text-[#e50914]" :"text-[gray]"}`} key={product.priceId}>₦{product.priceInfo.unit_amount! /100000}k</td>
                ))}
            </tr>
            <tr className='tableRow'>
                <td className="tableDataTitle">Video Quality</td>
                {products?.map((product)=>(
                    <td className={`tableDataFeature ${selectedPlan.priceId=== product.priceId? "text-[#e50914]" :"text-[gray]"}`} key={product.priceId}>{product.metadata.videoQuality }</td>
                ))}
            </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
       
        </tbody>
    </table>
  )
}

export default Table