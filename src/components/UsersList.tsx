import { Users } from "../types"

const users: Users[] = [
    {id: 1, img: 'https://unavatar.io/github/Jaco25PL', name: 'Joaquin Piedra', mail: 'jhondoe@gmail.com'},
    {id: 2, img: 'https://unavatar.io/github/barc', name: 'Jhon Doe', mail: 'jhondoe@gmail.com'},
    {id: 3, img: 'https://unavatar.io/github/franco', name: 'Jhon Doe', mail: 'jhondoejho@gmail.com'},
    {id: 4, img: 'https://unavatar.io/github/franco', name: 'Jhon Doe', mail: 'jhondoejho@gmail.com'},
    {id: 5, img: 'https://unavatar.io/github/franco', name: 'Jhon Doe', mail: 'jhondoejho@gmail.com'},
    {id: 6, img: 'https://unavatar.io/github/franco', name: 'Jhon Doe', mail: 'jhondoejho@gmail.com'},
]

export function UsersList () {

    return(
        <div className="w-[900px] relative overflow-x-auto border-solid border-2 border-gray-400 py-5 px-7 rounded-lg">
            
            <div className='flex items-center pl-6 mb-5  '>
                <span className='text-base font-semibold mr-3'>Users</span>
                <div className='bg-violet-700 rounded-full w-5 h-5 flex justify-center items-center'>{users.length}</div>
            </div>
            
            <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs  uppercase ">
                    <tr className="[&_*]:text-base">
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Users
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Emails
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => (
                            <tr  key={user.id} className={`${user.id === users.length ? 'border-none' : 'border-solid'} border-gray-500 border-b-2 px-6 py-4 font-medium  whitespace-nowrap`}>

                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">{user.id}</th>
                               
                                <th className="px-6 py-4 flex items-center">
                                    <img className='aspect-square w-12 rounded-full mr-5' src={user.img} alt={user.name} />
                                    <h2>{user.name}</h2>
                                </th>

                                <th className="px-6 py-4">{user.mail}</th>
                                
                                <th className="px-6 py-4 flex gap-2">
                                    <button type='button'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>

                                    <button type='button'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </button>
                                </th>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}