/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux"
import { changeSection } from "../../../../redux/features/section/sectionSlice"
import { deleteReminder } from "../../../../redux/features/reminders/remindersSlice"

const FormButtons = ({errors}) => {
  const state = useSelector(state => state.section)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteReminder())
    dispatch(changeSection('VIEW_REMINDERS'))
  }

  return (
    <div className="relative flex gap-2 justify-end">
      {
        state.actualSection === 'EDIT_FORM' ? 
        <button onClick={handleDelete} type="button" className="absolute left-0 bg-[#D42222] capitalize w-[108px] h-[49px] text-white rounded-[4px] disabled:cursor-not-allowed" >remove</button>
        : null
      }
      <button onClick={() => dispatch(changeSection('VIEW_REMINDERS'))} type="button" className="bg-[#626262] capitalize w-[108px] h-[49px] text-white rounded-[4px]">cancel</button>
      <button type="submit" className="bg-[#394ABC] capitalize w-[108px] h-[49px] text-white rounded-[4px] disabled:cursor-not-allowed" disabled={errors?.title || errors?.time || errors?.date }>save</button>
    </div>
  )
}

export default FormButtons