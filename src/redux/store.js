import { configureStore } from '@reduxjs/toolkit'
import remindersReducer from './features/reminders/remindersSlice'
import monthsReducer from './features/months/monthsSlice'

export const store = configureStore({
  reducer: {
    reminders: remindersReducer,
    months: monthsReducer
  },
})