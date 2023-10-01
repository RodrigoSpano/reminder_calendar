import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addReminder, editReminder } from "../redux/features/reminders/remindersSlice"
import { changeSection } from "../redux/features/section/sectionSlice"
import { useEffect } from "react"

const initialState = {
  title: '',
  description: '',
  date: '',
  time: '',
  color: '',
}


const useReminderHook = () => {
  const {actualSection} = useSelector(state => state.section)
  const {reminderDetail} = useSelector(state => state.reminders)

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
      dispatch(changeSection('VIEW_REMINDERS'))
    } else {
      setErrors(errors)
    }
  }
  
  const handleSubmitEditReminder = (e) => {
    e.preventDefault()
    if (!Object.values(errors).length) {
      let replacedDate = reminder.date.split('/')
      replacedDate[1].startsWith('0') && replacedDate[1].replace('0','') 
      replacedDate = replacedDate.join(', ')
      if(!reminder.color.length) setReminder({...reminder, color: '#BCAAA4'})
      dispatch(editReminder({...reminder, date: replacedDate}))
      dispatch(changeSection('VIEW_REMINDERS'))
    } else {
      setErrors(errors)
    }
  }

  useEffect(() => {
    if(actualSection === 'EDIT_FORM' && reminderDetail){
      setReminder({
        title: reminderDetail.title,
        description: reminderDetail.description,
        date: reminderDetail.date.split(', ').join('/'),
        time: reminderDetail.time,
        color: reminderDetail.color,
      }) 
    } else {
      setReminder(initialState)
    }
  }, [])

  return {handleReminderChange, handleChangeReminderColor, handleSubmitReminder, handleSubmitEditReminder, reminder, errors}
}

export default useReminderHook