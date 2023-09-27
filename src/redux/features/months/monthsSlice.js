import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  year: 2023,
  months: []
}

export const monthsSlice = createSlice({
  name: 'months',
  initialState,
  reducers: {
    fillYearsMonth: (state, action) => {
      state.year = action.payload.year
      state.months = action.payload.months
    }
  },
})

// Action creators are generated for each case reducer function
export const { fillYearsMonth } = monthsSlice.actions

export default monthsSlice.reducer