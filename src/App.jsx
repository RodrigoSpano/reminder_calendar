import CalendarContainer from "./components/calendar/CalendarContainer"
import ReminderContainer from "./components/reminder/ReminderContainer"

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#EBF3FE]">
      <div className="w-[1119px] flex">
      <ReminderContainer />
      <CalendarContainer />
      </div>
    </div>
  )
} 

export default App
