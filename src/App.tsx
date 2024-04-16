import './App.css'
import { UsersList } from './components/UsersList'


function App() {

  return (
   <div className='w-full flex flex-col items-center py-10'>
      
      <h1 className='mb-10 text-5xl font-semibold'>Users Management</h1>
      
      <div>
      
        <UsersList/>

      </div>
   </div>
  )
}

export default App
