import { useSelector } from 'react-redux'
import ReminderList from './ReminderList'
import NoReminders from './NoReminders'
import { useState } from 'react'
import { useEffect } from 'react'

const RemindersBody = () => {
  const [dayReminders, setDayReminders] = useState([]) 
  const remindersState = useSelector(state => state.reminders)
  const dateState = useSelector(state => state.months)

  async function getDayInformation() {
    let fixSelectedDate =  dateState.selectedDate.split(', ')
    fixSelectedDate[0] = parseInt(fixSelectedDate[0])+1
    fixSelectedDate = fixSelectedDate.join(', ')
    const filterRemindersByDay =  await remindersState.reminders.filter(r => r.date === fixSelectedDate)
    setDayReminders(filterRemindersByDay.sort((a,b) => a.time.localeCompare(b.time)))
  }
  
  useEffect(() => {
    getDayInformation()
  }, [dateState.selectedDate])
  return (
    <>
      {
        dayReminders.length ? <ReminderList reminders={dayReminders} /> : <NoReminders />
      }
    </>
  )
}

export default RemindersBody