/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { changeSection } from "../../../../redux/features/section/sectionSlice"

const FormButtons = ({errors}) => {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-2 justify-end">
      <button onClick={() => dispatch(changeSection('VIEW_REMINDERS'))} type="button" className="bg-[#626262] capitalize w-[108px] h-[49px] text-white rounded-[4px]">cancel</button>
      <button type="submit" className="bg-[#394ABC] capitalize w-[108px] h-[49px] text-white rounded-[4px] disabled:cursor-not-allowed" disabled={errors?.title || errors?.time || errors?.date }>save</button>
    </div>
  )
}

export default FormButtons