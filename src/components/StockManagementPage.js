import React, { useState } from 'react';

import Navigation from './Navigation';

import './css/StockManagement.css';

function StockManagement() {
  // Sample initial stock data
  const initialStock = [
    { id: 1, name: "Product A", quantity: 50 },
    { id: 2, name: "Product B", quantity: 30 },
    // Add more initial stock data here
  ];

  // State to manage stock data
  const [stock, setStock] = useState(initialStock);

  // Function to handle stock quantity updates
  const handleUpdateStock = (id, newQuantity) => {
    const updatedStock = stock.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setStock(updatedStock);
  };

  return (
    <>
    <Navigation/>
    <div className="stock-management-container">
      <h1 className="stock-management-heading">Stock Management</h1>
      <table className="stock-management-table">
        <thead className="stock-management-thead">
          <tr className="stock-management-tr">
            <th className="stock-management-th">Product Name</th>
            <th className="stock-management-th">Quantity</th>
            <th className="stock-management-th">Update Quantity</th>
          </tr>
        </thead>
        <tbody className="stock-management-tbody">
          {stock.map(item => (
            <tr key={item.id} className="stock-management-tr">
              <td className="stock-management-td">{item.name}</td>
              <td className="stock-management-td">{item.quantity}</td>
              <td className="stock-management-td">
                <input
                  type="number"
                  defaultValue={item.quantity}
                  onChange={(e) => handleUpdateStock(item.id, parseInt(e.target.value))}
                className='stock-management-input' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default StockManagement;
