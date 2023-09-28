/* eslint-disable react/prop-types */

import { useState } from "react"

const DaysBoxes = ({daysArr, startsOn}) => {
  const [selected, setSelected] = useState({value: null, day: null})

  return (
    <ol className='grid grid-cols-7 w-full gap-y-3 place-items-center text-white font-lato mt-3'>
      {
        daysArr?.map((el) => <li onClick={() => setSelected({value: el, day: el+1})} className={`${selected.value === el && 'bg-gradient-to-r from-[#FF465D] to-[#BC46BA] rounded-full'} cursor-pointer h-[42px] w-[42px] grid place-content-center text-lg font-medium`} style={{ gridColumnStart: el === 0 ? startsOn+1 : '' }} key={el}>{el+1}</li>)
      }
    </ol>
  )
}

export default DaysBoxes