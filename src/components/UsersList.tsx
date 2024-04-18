import { useAppSelector , useAppDispatch } from "../hooks/useStore"
import { deleteUser } from "../store/users/slice"
import { UserId } from "../types"
import { Link } from 'react-router-dom'


export function UsersList () {

    const users = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const HandleDeleteUser = (id: UserId) => {
        dispatch(deleteUser(id))    
    }

    return(
        <div>
            <div className="w-[900px] relative overflow-x-auto border-solid border-2 border-gray-400 py-5 px-7 rounded-lg">
            
            <div className='flex  items-center pl-6 mb-5  '>
                <span className='text-base font-semibold mr-3'>Users</span>
                <div className='bg-violet-700 rounded-full w-5 h-5 flex justify-center items-center'>{users.length}</div>
            </div>
            
            <table className="w-full text-sm text-left rtl:text-right ">
                <thead className=" text-xs  uppercase ">
                    <tr className="flex justify-between [&_*]:text-base">
                        <th scope="col" className="w-[100px] px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="w-[250px] px-6 py-3">
                            Users
                        </th>
                        <th scope="col" className="w-[250px] px-3 py-3">
                            Emails
                        </th>
                        <th scope="col" className="flex  px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
            </table>

            <table className="w-full text-sm text-left rtl:text-right">
                <tbody>
                    {
                        users?.map((user) => (
                            <tr  key={user.id} className={`h-full border-solid border-gray-500 border-b-2 py-4 font-medium whitespace-nowrap flex justify-between items-center`}>
                            
                                <th className="w-[100px] px-6 py-4 font-bold  whitespace-nowrap">{user.id}</th>
                               
                                <th className="w-[250px] px-6 py-4 flex items-center">
                                    <img className='aspect-square w-12 rounded-full mr-5' src={`https://unavatar.io/github/${user.github}`} alt={user.name} />
                                    <h2>{user.name}</h2>
                                </th>

                                <th className="w-[250px] pr-6 py-4">{user.mail}</th>
                                
                                <th className=" px-6 py-4 flex items-center gap-2">
                                    <button 
                                    type='button'
                                    aria-label="delete"
                                    onClick={() => HandleDeleteUser(user.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-red-400 transition-colors duration-300 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>

                                    <Link
                                    to={`/edit/${user.id}`} 
                                    type='button'
                                    aria-label="edit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-green-300 transition-colors duration-300 ">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
  
                                    </Link>
                                </th>

                            </tr>
                        ))
                    }
                </tbody>
            </table>


            </div>
            
            <div className="mt-5">
                <Link
                to='/create'
                className="hover:bg-green-300 hover:text-green-700 bg-violet-900 transition-colors duration-300 font-semibold px-3 py-2 rounded-lg"
                >Create New User</Link>
            </div>
        </div>
    )
}