import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = {
  reminders: [],
  reminderDetail: {}
}

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    getReminder: (state, action) => { // get reminders from specific date
      const findReminder = state.reminders.filter(r => r.date === action.payload.date)
      return findReminder
    },
    addReminder: (state, action) => { //add reminder
      state.reminders.push({ id: uuid().slice(0, 8), ...action.payload })
    },
    editReminder: (state, action) => {
      const filterReminders = state.reminders.filter(r => r.id !== state.reminderDetail.id)
      filterReminders.push(action.payload)
      state.reminders = filterReminders
    },
    getReminderDetail: (state, action) => {
      const findReminder = state.reminders.find(r => r.id === action.payload)
      state.reminderDetail = findReminder
    },
    deleteReminder: (state) => {
      state.reminders = state.reminders.filter(r => r.id !== state.reminderDetail.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { getReminder, addReminder, getReminderDetail, editReminder, deleteReminder } = remindersSlice.actions

export default remindersSlice.reducer