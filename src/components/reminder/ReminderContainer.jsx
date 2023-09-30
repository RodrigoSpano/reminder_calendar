import HeaderReminder from "./sub-comps/HeaderReminder"
import ReminderForm from "./sub-comps/reminderForm/ReminderForm"

const ReminderContainer = () => {
  return (
    <div className=' h-[686px] rounded-l-[40px] bg-white shadow-lg'>
      <HeaderReminder />
      <ReminderForm />
    </div>
  )
}

export default ReminderContainer