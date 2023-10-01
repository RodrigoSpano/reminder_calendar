import { useSelector } from "react-redux"
import useReminderHook from "../../../../customHooks/useReminderHook"
import FormButtons from "./FormButtons"

const ReminderForm = () => {
  const {actualSection} = useSelector(state => state.section)
  const colors = ['#C8E6C9', '#F5DD29', '#FFCC80', '#EF9A9A', '#CD8DE5', '#5BA4CF', '#29CCE5', '#6DECA9', '#FF8ED4', '#BCAAA4']
  const {handleReminderChange,handleSubmitReminder, handleChangeReminderColor, handleSubmitEditReminder, reminder, errors} = useReminderHook()

  return (
    <form className="flex flex-col gap-5 px-10" onSubmit={actualSection === 'EDIT_FORM' ? handleSubmitEditReminder : handleSubmitReminder}>
      {/* title */}
      <div className="flex flex-col ">
        <div className="flex gap-2 items-center">
          <label className="font-openSans text-lg text-[#384042]">Title</label>
          {errors.title && <span className="text-red-500 text-xs font-bold">{errors.title}</span>}
        </div>
      <input maxLength={30} className="w-[602px] h-[48px] rounded-md border border-[#31272566] placeholder:text-[#38404280] pl-5" autoComplete="off" onChange={handleReminderChange} name="title" value={reminder.title} placeholder="Title" />
      </div>
      {/* description */}
      <div className="flex flex-col">
        <label className="font-openSans text-lg text-[#384042]">Description</label>
        <textarea className="w-[602px] h-[76px] rounded-md border border-[#31272566] placeholder:text-[#38404280] pl-5 pt-2"  autoComplete="off" onChange={handleReminderChange} name="description" value={reminder.description} placeholder="Description" />
      </div>
      {/* date and time inputs */}
      <div className="flex justify-between max-w-[602px]">
        <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <label className="font-openSans text-lg text-[#384042]">Date</label>
          {errors.date && <span className="text-red-500 text-xs font-bold">{errors.date}</span>}
        </div>
          <input className="w-[281px] h-[48px] rounded-md border border-[#31272566] placeholder:text-[#38404280] pl-5" autoComplete="off" onChange={handleReminderChange} name="date" value={reminder.date} max={10} min={10} placeholder="MM/DD/YYYY" />
        </div>
        <div className="flex flex-col">
        <div className="flex gap-2 items-center">
        <label className="font-openSans text-lg text-[#384042]">Time</label>
          {errors.time && <span className="text-red-500 text-xs font-bold">{errors.time}</span>}
        </div>
          <input className="w-[281px] h-[48px] rounded-md border border-[#31272566] placeholder:text-[#38404280] pl-5" autoComplete="off" onChange={handleReminderChange} name="time" value={reminder.time} max={5} min={5} placeholder="HH:MM" />
        </div>

      </div>
      <div className="flex flex-col">
      <label className="font-openSans text-lg text-[#384042]">Color</label>
        <div className="flex gap-2">
        {colors.map(c => <div onClick={() => handleChangeReminderColor(c)} key={c} style={{backgroundColor: `${c}`}} className={` h-[48px] w-[55px] rounded-md`}/>)}
        </div>
      </div>
      <span className="bg-[#31272533] w-[602px] h-[1px] my-4"></span>
      <FormButtons errors={errors} />
    </form>
  )
}

export default ReminderForm