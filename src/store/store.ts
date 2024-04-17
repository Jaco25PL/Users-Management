import { configureStore, type Middleware } from "@reduxjs/toolkit"
import usersReducer from './users/slice'

const persistenceLSMiddleware: Middleware = (store) => (next) => (action) => {
	next(action)
	localStorage.setItem("redux-state", JSON.stringify(store.getState()))
}

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistenceLSMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch