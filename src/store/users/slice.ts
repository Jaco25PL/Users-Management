import { createSlice } from '@reduxjs/toolkit'
import { Users } from "../../types"

const users: Users[] = [
    {id: 1, img: 'https://unavatar.io/github/Jaco25PL', name: 'Joaquin Piedra', mail: 'jhondoe@gmail.com'},
    {id: 2, img: 'https://unavatar.io/github/barc', name: 'Jhon Doe', mail: 'jhondoe@gmail.com'},
    {id: 3, img: 'https://unavatar.io/github/franco', name: 'Jhon Doe', mail: 'jhondoejho@gmail.com'},
]

export const usersSlice = createSlice({

    name: 'users',
    initialState: users,
    reducers: {}

})

export default usersSlice.reducer