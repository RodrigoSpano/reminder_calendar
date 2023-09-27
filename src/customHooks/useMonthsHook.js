import { useDispatch, useSelector } from "react-redux";
import { fillYearsMonth } from "../redux/features/months/monthsSlice";
import { useState } from "react";

const useMonthsHook = () => {

  const state = useSelector(state => state.months)

  const [actual, setActual] = useState(parseInt(new Date().getMonth()))

  const dispatch = useDispatch()


  const getMonthsOfYear = (year = 2023) => {
    const monthsArr = [...Array(12).keys()]
    const opt = { month: 'long' };

    const months = monthsArr.map(mKey => {
      const date = new Date(year, mKey)
      const month = new Intl.DateTimeFormat('en-US', opt).format(date)
      const firstWeekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
      const daysOfMonth = new Date(2023, mKey + 1, 0).getDate()
      return {
        id: mKey + 1,
        month,
        firstWeekDay,
        daysOfMonth
      }
    })
    dispatch(fillYearsMonth({ year, months }))
  }

  const nextMonth = () => {
    if (actual < 11) setActual(actual + 1)
  }

  const prevMonth = () => {
    if (actual > new Date().getMonth()) setActual(actual - 1)
  }

  return { getMonthsOfYear, nextMonth, prevMonth, actual, month: state.months?.[actual] }
}

export default useMonthsHook