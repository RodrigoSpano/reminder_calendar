/* eslint-disable react/prop-types */

const HeaderForm = ({today, title}) => {
  return (
    <h2 className="text-[#384042] font-openSans text-2xl font-semibold">{title} - {today.weekday}, {today.month} {today.date}, {today.year}</h2>
    )
}

export default HeaderForm