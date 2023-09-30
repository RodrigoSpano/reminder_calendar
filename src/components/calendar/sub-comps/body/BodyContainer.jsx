/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import DaysBoxes from "./DaysBoxes"
import Weekdays from "./Weekdays"

const BodyContainer = ({isDisabledMonth}) => {
  const state = useSelector(state => state.months)
  const daysArr =  [...Array(state.months[state.actualMonth].daysOfMonth).keys()]
  return (
    <div className="flex flex-col px-10">
      <Weekdays />
      <DaysBoxes isDisabledMonth={isDisabledMonth} daysArr={daysArr} startsOn={state.months[state.actualMonth].startsOn} />
    </div>
  )
}

export default BodyContainer