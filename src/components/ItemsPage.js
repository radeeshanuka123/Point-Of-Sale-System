import React from 'react'
import Navigation from './Navigation'

import "./css/ItemsPage.css"

function ItemsPage() {
  return (
    <>
    <Navigation/>
    <div className='items-page-container'>

    <h1 className='items-h1'>Items</h1>
  <table className='items-table'>
    <thead className='items-thead'>
      <tr className='items-tr'>
        <th className='items-th'>Product Name</th>
        <th className='items-th'>SKU/Barcode</th>
        <th className='items-th'>Price</th>
        <th className='items-th'>Quantity Available</th>
        <th className='items-th'>Category/Department</th>
        <th className='items-th'>Tax Status</th>
        <th className='items-th'>Discounts/Promotions</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className='items-tr'>
        <td className='items-td'>Product A</td>
        <td className='items-td'>SKU123</td>
        <td className='items-td'>$10.00</td>
        <td className='items-td'>50</td>
        <td className='items-td'>Groceries</td>
        <td className='items-td'>Taxable</td>
        <td className='items-td'>10% off</td>
      </tr>
      
      <tr className='items-tr'>
        <td className='items-td'>Product B</td>
        <td className='items-td'>SKU456</td>
        <td className='items-td'>$20.00</td>
        <td className='items-td'>30</td>
        <td className='items-td'>Electronics</td>
        <td className='items-td'>Taxable</td>
        <td className='items-td'>20% off</td>
      </tr>
      
    </tbody>
  </table>
  </div>
  </>
  )
}

export default ItemsPage