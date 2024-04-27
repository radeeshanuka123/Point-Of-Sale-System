import React, { useState } from 'react';
import Navigation from './Navigation';
import "./css/ItemCategory.css"

function ItemPage() {
  // Sample initial item data
  const initialItems = [
    { id: 1, name: "Product A", category: "Category 1", price: 10.00, quantity: 50 },
    { id: 2, name: "Product B", category: "Category 2", price: 20.00, quantity: 30 },
    { id: 2, name: "Product C", category: "Category c", price: 40.00, quantity: 20 },
    // Add more initial item data here
  ];

  // State to manage item data
  const [items, setItems] = useState(initialItems);
  const [editItem, setEditItem] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  // Function to handle adding/editing items
  const handleAddEditItem = () => {
    if (editItem) {
      const updatedItems = items.map(item => {
        if (item.id === editItem.id) {
          return { ...item, name: itemName, category: itemCategory, price: parseFloat(itemPrice), quantity: parseInt(itemQuantity) };
        }
        return item;
      });
      setItems(updatedItems);
    } else {
      const newItem = { id: items.length + 1, name: itemName, category: itemCategory, price: parseFloat(itemPrice), quantity: parseInt(itemQuantity) };
      setItems([...items, newItem]);
    }
    resetForm();
  };

  // Function to handle editing an item
  const handleEdit = (item) => {
    setEditItem(item);
    setItemName(item.name);
    setItemCategory(item.category);
    setItemPrice(item.price.toString());
    setItemQuantity(item.quantity.toString());
  };

  // Function to handle deleting an item
  const handleDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  // Function to reset form fields
  const resetForm = () => {
    setEditItem(null);
    setItemName('');
    setItemCategory('');
    setItemPrice('');
    setItemQuantity('');
  };

  return (
    <div className='item-category-container'>
      <Navigation />
      <h1 className='item-category-heading'>Item Management</h1>
      <table className='item-category-table'>
        <thead className='item-category-table-header'>
          <tr className='item-category-table-header-row'>
            <th className='item-category-table-header-cell'>Product Name</th>
            <th  className='item-category-table-header-cell'>Category</th>
            <th className='item-category-table-header-cell'>Price</th>
            <th className='item-category-table-header-cell'>Quantity</th>
            <th className='item-category-table-header-cell'>Edit</th>
            <th className='item-category-table-header-cell'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className='item-category-table-cell'>{item.name}</td>
              <td className='item-category-table-cell'>{item.category}</td>
              <td className='item-category-table-cell'>${item.price.toFixed(2)}</td>
              <td className='item-category-table-cell'>{item.quantity}</td>
              <td className='item-category-table-cell'><button onClick={() => handleEdit(item)}>Edit</button></td>
              <td className='item-category-table-cell'><button onClick={() => handleDeleteItem(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className='item-category-heading'>{editItem ? 'Edit Item' : 'Add Item'}</h2>
      <ItemForm 
        itemName={itemName}
        setItemName={setItemName}
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
        handleSubmit={handleAddEditItem}
        resetForm={resetForm}
      />
    </div>
  );
}

function ItemForm({ itemName, setItemName, itemCategory, setItemCategory, itemPrice, setItemPrice, itemQuantity, setItemQuantity, handleSubmit, resetForm }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleReset = () => {
    resetForm();
  };

  return (
    <form onSubmit={handleFormSubmit} className='item-category-form'>
      <label htmlFor="itemName" className='item-category-label'>Product Name:</label>
      <input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} required className='item-category-input' /><br />
      <label htmlFor="itemCategory" className='item-category-label'>Category:</label>
      <input type="text" id="itemCategory" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)} required className='item-category-input' /><br />
      <label htmlFor="itemPrice" className='item-category-label'>Price:</label>
      <input type="number" id="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} step="0.01" required className='item-category-input' /><br />
      <label htmlFor="itemQuantity" className='item-category-label'>Quantity:</label>
      <input type="number" id="itemQuantity" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} required className='item-category-input' /><br />
      <button type="submit" className='item-category-btn'>{itemName ? 'Edit' : 'Add'} Item</button>
      <button type="button" onClick={handleReset} className='item-category-btn'>Reset</button>
    </form>
  );
}

export default ItemPage;
