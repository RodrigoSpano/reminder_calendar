import { useEffect } from 'react'
import CalendarHeader from './sub-comps/header/CalendarHeader'
import useMonthsHook from '../../customHooks/useMonthsHook'
import BodyContainer from './sub-comps/body/BodyContainer'
import { useSelector } from 'react-redux'

const CalendarContainer = () => {
  const { getMonthsOfYear, nextMonth,prevMonth } = useMonthsHook()
  const state = useSelector(state => state.months)
  useEffect(() =>{
    async function getMonth(){
      await getMonthsOfYear()
    }
    getMonth()
  },[])

  return (
    <>
    {
      state.months.length ? 
      <div className='bg-gradient-to-b from-[#101277] to-[#421F91] w-[450px] h-[686px] rounded-r-[40px] items-center justify-center select-none'>
      <CalendarHeader handleNext={nextMonth} handlePrev={prevMonth} />
      <BodyContainer />
    </div> : null
    }
    </>
    )
}

export default CalendarContainer