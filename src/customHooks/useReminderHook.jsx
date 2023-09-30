import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { addReminder } from "../redux/features/reminders/remindersSlice"

const initialState = {
  title: '',
  description: '',
  date: '',
  time: '',
  color: '',
}

const useReminderHook = () => {
  const [reminder, setReminder] = useState(initialState)

  // const dispatch = useDispatch()

  const handleReminderChange = (e) => {
    setReminder({
      ...reminder,
      [e.target.name]: e.target.value
    })
  }


  const handleChangeReminderColor = (color) => {
    setReminder({...reminder, color})
  }

  const handleSubmitReminder = (e) => {
    e.preventDefault()
    const replacedDate = reminder.date.replace('/', ', ')
    setReminder({
      ...reminder,
      date: replacedDate
    })
    console.log(reminder)
  }

  return {handleReminderChange, handleChangeReminderColor, handleSubmitReminder, reminder}
}

export default useReminderHook