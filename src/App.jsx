import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from './components/common/Sidebar';

import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import SalesPage from './pages/SalesPage';
import OrdersPage from './pages/OrdersPage';


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='flex bg-gray-900 h-screen text-gray-100 overflow-hidden'>
    <div className='fixed inset-0 z-0'>
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
      <div className='absolute inset-0 backdrop-blur-sm'/>
    </div>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<OverviewPage />}/>
      <Route path='/products' element={<ProductsPage />}/>
      <Route path='/users' element={<UsersPage />}/>
      <Route path='/sales' element={<SalesPage />}/>
      <Route path='/orders' element={<OrdersPage />}/>
      
      
    </Routes>
  </div>
  )
}

export default App
