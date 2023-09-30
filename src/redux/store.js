import { configureStore } from '@reduxjs/toolkit'
import remindersReducer from './features/reminders/remindersSlice'
import monthsReducer from './features/months/monthsSlice'
import sectionReducer from './features/section/sectionSlice'

export const store = configureStore({
  reducer: {
    reminders: remindersReducer,
    months: monthsReducer,
    section: sectionReducer
  },
})