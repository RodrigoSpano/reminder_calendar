import { useSelector } from 'react-redux'
import ChangeMonthBtns from './ChangeMonthBtns'

// eslint-disable-next-line react/prop-types
const CalendarHeader = ({ handleNext, handlePrev}) => {
  const state = useSelector(state => state.months)
  return (
    <div className='flex flex-col text-white font-openSans w-full gap-10 mt-14'>
      <div className='flex flex-col justify-center items-center leading-[1]'>
        <h2 className='text-[80px] font-bold text-center'>{state.year}</h2>
        <h3 className='text-[45px] font-semibold'>{state.months[state.actualMonth].month}</h3>
      </div>
      <ChangeMonthBtns handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default CalendarHeader