import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {  UserId, UserWithId } from "../../types"

const defaultUsers =  [
    {id: '1', github: 'Jaco25PL', name: 'Joaquin Piedra', mail: 'jhondoe@gmail.com'},
    {id: '2', github: 'barc', name: 'Jhon Doe', mail: 'jhondoe@gmail.com'},
    {id: '3', github: 'franco', name: 'Jhon Doe', mail: 'jhondoejho@gmail.com'},
]

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem('redux-state')
    return persistedState ? JSON.parse( persistedState ).users : defaultUsers
})() // FUNCTION THAT CALLS ITSELF

export const usersSlice = createSlice({

    name: 'users',
    initialState,
    reducers: {
        deleteUser: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter((user) => user.id !== id)
        },
        addNewUser: (state, action: PayloadAction<UserWithId>) => {
            //const id = crypto.randomUUID()
            //state.push({id, ...action.payload})
            state.push(action.payload)
            //or use immer -> state.push(action.payload)
        },
        updateUser: (state, action: PayloadAction<UserWithId>) => {
            const { id, name, mail, github } = action.payload
            const update = state.find(user => user.id === id)
            if(update){
                update.name = name
                update.mail = mail
                update.github = github
            }
        }
    }
})

export default usersSlice.reducer

export const { deleteUser, addNewUser, updateUser } = usersSlice.actions