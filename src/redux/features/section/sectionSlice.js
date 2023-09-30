import { createSlice } from '@reduxjs/toolkit'

const section_types = {
  HOME: 'HOME',
  ADD_FORM: 'ADD_FORM',
  EDIT_FORM: 'EDIT_FORM',
  VIEW_REMINDERS: 'VIEW_REMINDERS'
}

const initialState = {
  actualSection: section_types.HOME,
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    changeSection: (state, action) => {
      switch (action) {
        case 'HOME':
          state.actualSection = section_types.HOME
          break;
        case 'ADD_FORM':
          state.actualSection = section_types.ADD_FORM
          break;
        case 'EDIT_FORM':
          state.actualSection = section_types.EDIT_FORM
          break;
        case 'VIEW_REMINDERS':
          state.actualSection = section_types.VIEW_REMINDERS
          break
        default:
          state.actualSection = section_types.HOME
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const { changeSection } = sectionSlice.actions

export default sectionSlice.reducer