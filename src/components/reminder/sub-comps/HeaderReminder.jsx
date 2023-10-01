import { useEffect } from "react"
import { useState } from "react"
import HeaderForm from "./reminderForm/HeaderForm"
import { useSelector } from "react-redux"
import HomeHeader from "./reminderForm/homeHeader"

const HeaderReminder = () => {
  const state = useSelector(state => state.section)
  const [today, setToday] = useState({})
  useEffect(() => {
    const todayInfo = new Intl.DateTimeFormat('en-US', {weekday: 'long', month: 'long', year:'numeric'}).format(new Date())
    const todayObj = {
      year: todayInfo.split(' ')[1],
      weekday: todayInfo.split(' ')[2],
      month: todayInfo.split(' ')[0],
      date: new Date().getDate()
    }
    setToday(todayObj)
  }, [])
  return (
    <div className="flex items-center p-10">
      {
        ( state.actualSection === 'VIEW_REMINDERS') ? <HomeHeader today={today} /> : 
        (state.actualSection === 'ADD_FORM') ? <HeaderForm title={'Add reminder'} today={today} /> : 
        (state.actualSection === 'EDIT_FORM') ? <HeaderForm title={'Edit reminder'} today={today} />  
        : null
      }
    </div>
  )
}

export default HeaderReminder