import { useEffect } from 'react'
import CalendarHeader from './sub-comps/CalendarHeader'
import useMonthsHook from '../../customHooks/useMonthsHook'

const CalendarContainer = () => {
  const { getMonthsOfYear, month, nextMonth,prevMonth } = useMonthsHook()
  useEffect(() =>{
    getMonthsOfYear()
  },[])

  return (
    <div className='bg-gradient-to-b from-[#101277] to-[#421F91] w-[450px] h-[686px] rounded-r-[40px] items-center justify-center'>
      <CalendarHeader actualMonth={month?.month} handleNext={nextMonth} handlePrev={prevMonth} />
    </div>
  )
}

export default CalendarContainer