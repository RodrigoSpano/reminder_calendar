import { useState } from "react"
import { useDispatch } from "react-redux"
import { addReminder } from "../redux/features/reminders/remindersSlice"

const initialState = {
  title: '',
  description: '',
  date: '',
  time: '',
  color: '',
}


const useReminderHook = () => {
  const [reminder, setReminder] = useState(initialState)
  const [errors, setErrors] = useState(initialState)
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  const hourRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  
  const dispatch = useDispatch()

  const validate = (reminder) => {
    let validationErrors = {};

    if (reminder.title.length < 3) validationErrors.title = "Title must be longer.";
    if (reminder.title.length > 30) validationErrors.title = "Title is to long.";
    if (reminder.date.split('/')[0] < new Date().getMonth()) validationErrors.date = 'Make reminders in future dates'
    if (reminder.date.split('/')[2] < new Date().getDay()) validationErrors.date = 'Make reminders in future dates'
    if (reminder.time.split(':')[0] >= '24' ) validationErrors.time = 'time cannot be higher than 23:59'
    if (!dateRegex.test(reminder.date)) validationErrors.date = 'please use format MM/DD/YYYY'
    if (!hourRegex.test(reminder.time)) validationErrors.time = 'please use format HH:MM'
    return validationErrors;
  };
  
  const handleReminderChange = (e) => {
    setReminder({
      ...reminder,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...reminder,
      [e.target.name]: e.target.value
      })
    );
  }

  const handleChangeReminderColor = (color) => {
    setReminder({...reminder, color})
    setErrors(
      validate({
        ...reminder, color
      })
    );
  }

  const handleSubmitReminder = (e) => {
    e.preventDefault()
    if (!Object.values(errors).length) {

      let replacedDate = reminder.date.split('/')
      replacedDate[1].startsWith('0') && replacedDate[1].replace('0','') 
      replacedDate = replacedDate.join(', ')
      if(!reminder.color.length) setReminder({...reminder, color: '#BCAAA4'})
      dispatch(addReminder({...reminder, date: replacedDate}))
    } else {
      setErrors(errors)
    }
  }

  return {handleReminderChange, handleChangeReminderColor, handleSubmitReminder, reminder, errors}
}

export default useReminderHook