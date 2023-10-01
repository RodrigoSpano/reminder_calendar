/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { changeSection } from "../../../../redux/features/section/sectionSlice"

const ReminderCard = ({data}) => {
  const dispatch = useDispatch()
  return (
    <div className="relative flex gap-4 items-center h-[134px] rounded-2xl shadow-lg shadow-[#D1DCF0] p-4 w-[567px] ">
      {/* color */}
      <div style={{backgroundColor: data.color}} className="w-[12px] h-[111px] rounded-full" /> 
      {/* body */}
      <div className="flex justify-between items-center w-full h-full">
        {/* leftside */}
        <div className="flex flex-col font-openSans">
          <span className="text-[#797979] text-sm font-openSans capitalize">{data.title}</span>
          <p className="text-[#384042] font-semibold text-lg ">{data.description}</p>
        </div>
        {/* rightside */}
        <div className="flex w-[100px] h-full">
        <span className="h-full w-[1px] bg-[#D1DCF0] "/>
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/clock.svg" />
          <p className="text-[#797979] text-4xl font-openSans font-semibold text-center">{data.time}</p>
        </div>
        </div>
      </div>
      <div onClick={() => dispatch(changeSection('EDIT_FORM'))} className="cursor-pointer absolute bottom-0 right-0 translate-y-4  rounded-full w-[36px] h-[36px] bg-gradient-to-r from-[#3BC6FB] to-[#0FC] grid place-content-center">  
      <img src="/assets/pen.svg" className="w-[18px] h-[18px] text-white" />
      </div>
    </div>
  )
}

export default ReminderCard