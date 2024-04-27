import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ItemsPage from './components/ItemsPage';
import ItemCategoriesPage from './components/ItemCategoriesPage';
import StockManagementPage from './components/StockManagementPage';
import PointOfSalePage from './components/PointOfSalePage';
import ErrorComponent from './components/ErrorComponent';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/item-categories" element={<ItemCategoriesPage />} />
        <Route path="/stock-management" element={<StockManagementPage />} />
        <Route path="/point-of-sale" element={<PointOfSalePage />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </Router>
    
    </>  );
}

export default App;
