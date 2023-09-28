/* eslint-disable react/prop-types */

const DaysBoxes = ({daysArr, startsOn}) => {
  return (
    <ol className='grid grid-cols-7 w-full gap-y-3 place-items-center text-white font-lato mt-3'>
      {
        daysArr?.map((el) => <li className="cursor-pointer h-[42px] w-[42px] grid place-content-center text-lg font-medium" style={{ gridColumnStart: el === 0 ? startsOn+1 : '' }} key={el}>{el+1}</li>)
      }
    </ol>
  )
}

export default DaysBoxes