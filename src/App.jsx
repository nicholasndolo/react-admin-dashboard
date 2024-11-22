import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='flex bg-gray-900 text-gray-100 overflow-hidden'>
    <Routes>
      <Route path='/' element={<OverviewPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
    </Routes>
  </div>
  )
}

export default App
