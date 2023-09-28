/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux"
import { setSelectedDate } from "../../../../redux/features/months/monthsSlice"

const DaysBoxes = ({daysArr, startsOn}) => {
  const state = useSelector(state => state.months)
  const dispatch = useDispatch()

  const handleChange = async (value) => {
    dispatch(setSelectedDate(`${state.year}, ${state.actualMonth}, ${value+1}`))
  }

  return (
    <ol className='grid grid-cols-7 w-full gap-y-3 place-items-center text-white font-lato mt-3'>
      {
        daysArr?.map((el) => <li onClick={() => handleChange(el)} 
        className={`${(parseInt(state.selectedDate?.split(', ')[2]) === el+1 && parseInt(state.selectedDate?.split(', ')[1]) === state.actualMonth ) && 'bg-gradient-to-r from-[#FF465D] to-[#BC46BA] rounded-full'} cursor-pointer h-[42px] w-[42px] grid place-content-center text-lg font-medium`} 
        style={{ gridColumnStart: el === 0 ? startsOn+1 : '' }} key={el}>{el+1}</li>)
      }
    </ol>
  )
}

export default DaysBoxes