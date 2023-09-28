import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  year: 2023,
  actualMonth: null,
  months: []
}

export const monthsSlice = createSlice({
  name: 'months',
  initialState,
  reducers: {
    fillYearsMonth: (state, action) => {
      state.year = action.payload.year
      state.months = action.payload.months
      state.actualMonth = action.payload.actualMonth
    },
    updateActualMonth: (state, action) => {
      state.actualMonth = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fillYearsMonth, updateActualMonth } = monthsSlice.actions

export default monthsSlice.reducer