import { useSelector } from 'react-redux'
import ChangeMonthBtns from './ChangeMonthBtns'

// eslint-disable-next-line react/prop-types
const CalendarHeader = ({actualMonth, handleNext, handlePrev}) => {
  const state = useSelector(state => state.months)
  return (
    <div className='flex flex-col text-white font-openSans w-full gap-16 py-10'>
      <div className='flex flex-col justify-center items-center leading-[1]'>
        <h2 className='text-[80px] font-bold text-center'>{state.year}</h2>
        <h3 className='text-[45px] font-semibold'>{actualMonth}</h3>
      </div>
      <ChangeMonthBtns handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default CalendarHeader