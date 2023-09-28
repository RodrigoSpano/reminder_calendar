import { weekDays } from "../../../../utils/weekDaysHelper"

const Weekdays = () => {
  return (
    <div className="grid grid-cols-7 w-full font-lato">
      {weekDays?.map(el => <span className="text-white text-center text-xs tracking-[0.36px] uppercase" key={el}>{el.slice(0,3)}</span>)}
    </div>
  )
}

export default Weekdays