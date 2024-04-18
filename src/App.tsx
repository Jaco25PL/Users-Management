import './App.css'
import { AddNewUser } from './components/AddNewUser'
import { UsersList } from './components/UsersList'
import { Update } from './components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    
      <div className='min-h-dvh w-full flex flex-col items-center py-10'>
         <h1 className='mb-10 text-5xl font-semibold'>Users Management</h1>

         <Routes>
            <Route path='/' element={<UsersList/>} />
            <Route path='/create' element={<AddNewUser/>} />
            <Route path='/edit/:id' element={<Update/>} />
         </Routes>
         
      </div>
    
    </BrowserRouter>
  )
}

export default App
