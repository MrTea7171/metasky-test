
import { configureStore } from '@reduxjs/toolkit'
import authreducer from './authSlice'
import userreducer from './userSlice'

export const store = configureStore({
    reducer: {
      authSlice:authreducer,
      userSlice:userreducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch