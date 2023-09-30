/* eslint-disable react/prop-types */

const HomeHeader = ({today}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h2 className="text-[#384042] font-openSans text-2xl font-semibold">{today.weekday}, {today.month} {today.date}, {today.year}</h2>
      <button className="bg-gradient-to-r from-[#FF465D] to-[#BC46BA] w-[180px] h-[49px] text-white shadow-md">Add reminder</button>
    </div>
  )
}

export default HomeHeader