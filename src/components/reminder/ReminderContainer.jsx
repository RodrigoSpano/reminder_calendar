import { useSelector } from "react-redux"
import HeaderReminder from "./sub-comps/HeaderReminder"
import ReminderForm from "./sub-comps/reminderForm/ReminderForm"
import RemindersBody from "./sub-comps/remindersContainer/RemindersBody"

const ReminderContainer = () => {
  const {actualSection} = useSelector(state => state.section)

  return (
    <div className=' h-[686px] rounded-l-[40px] bg-white w-full shadow-lg '>
      <HeaderReminder />
      {
        actualSection === 'VIEW_REMINDERS' ? 
        <RemindersBody/> : 
        <ReminderForm />
      }
    </div>
  )
}

export default ReminderContainer