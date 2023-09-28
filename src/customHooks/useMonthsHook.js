import { useDispatch } from "react-redux";
import { fillYearsMonth, updateActualMonth } from "../redux/features/months/monthsSlice";
import { useState } from "react";

const useMonthsHook = () => {

  const newDate = new Date().getMonth()
  const [actual, setActual] = useState(newDate)

  const dispatch = useDispatch()


  const getMonthsOfYear = async (year = 2023) => {
    const monthsArr = [...Array(12).keys()]
    const opt = { month: 'long' };

    const months = monthsArr.map(mKey => {
      const date = new Date(year, mKey)
      const month = new Intl.DateTimeFormat('en-US', opt).format(date).toLowerCase()
      const firstWeekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date).toLowerCase()
      const daysOfMonth = new Date(year, mKey + 1, 0).getDate()
      const startsOn = new Date(year, mKey, 1).getDay()
      return {
        id: mKey + 1,
        month,
        firstWeekDay,
        daysOfMonth,
        startsOn
      }
    })
    dispatch(fillYearsMonth({ year, actualMonth: actual, months }))
  }

  const nextMonth = () => {
    if (actual < 11) {
      setActual(actual + 1)
      dispatch(updateActualMonth(actual + 1))
    }
  }

  const prevMonth = () => {
    if (actual > new Date().getMonth()) {
      setActual(actual - 1)
      dispatch(updateActualMonth(actual - 1))
    }
  }

  return { getMonthsOfYear, nextMonth, prevMonth, actual }
}

export default useMonthsHook