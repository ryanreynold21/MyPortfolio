import { configureStore } from '@reduxjs/toolkit'
import CardSlice from './cardSlice'


export const store = configureStore({
  reducer: {
    card: CardSlice
  },
})