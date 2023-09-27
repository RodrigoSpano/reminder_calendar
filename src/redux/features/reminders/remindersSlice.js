import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reminders: [],
}

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    getReminder: (state, action) => { // get reminders from specific date
      const findReminder = state.reminders.filter(r => r.date === action.payload.date)
      return findReminder
    }
  },
})

// Action creators are generated for each case reducer function
export const { getReminder } = remindersSlice.actions

export default remindersSlice.reducer