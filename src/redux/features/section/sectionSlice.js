import { createSlice } from '@reduxjs/toolkit'

const section_types = {
  ADD_FORM: 'ADD_FORM',
  EDIT_FORM: 'EDIT_FORM',
  VIEW_REMINDERS: 'VIEW_REMINDERS'
}

const initialState = {
  actualSection: section_types.ADD_FORM,
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    changeSection: (state, action) => {
      if (action.payload === 'ADD_FORM') {
        state.actualSection = section_types.ADD_FORM
      }
      if (action.payload === 'EDIT_FORM') {
        state.actualSection = section_types.EDIT_FORM
      }
      if (action.payload === 'VIEW_REMINDERS') {

        state.actualSection = section_types.VIEW_REMINDERS
      }
    }

  },
})

// Action creators are generated for each case reducer function
export const { changeSection } = sectionSlice.actions

export default sectionSlice.reducer