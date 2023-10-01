/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { changeSection } from "../../../../redux/features/section/sectionSlice"

const HomeHeader = ({today}) => {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between items-center w-full">
      <h2 className="text-[#384042] font-openSans text-2xl font-semibold">{today.weekday}, {today.month} {today.date}, {today.year}</h2>
      <button className="bg-gradient-to-r from-[#FF465D] to-[#BC46BA] w-[180px] h-[49px] text-white shadow-md" onClick={() => dispatch(changeSection('ADD_FORM'))}>Add reminder</button>
    </div>
  )
}

export default HomeHeader