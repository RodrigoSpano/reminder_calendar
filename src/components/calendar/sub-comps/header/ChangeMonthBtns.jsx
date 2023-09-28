/* eslint-disable react/prop-types */

const ChangeMonthBtns = ({handleNext, handlePrev}) => {
  return (
    <div className='flex gap-1 self-center'>
      <img className="cursor-pointer" onClick={handlePrev} src='/assets/chevron-left.svg' />
      <img src='/assets/point-navigation.svg' />
      <img className="cursor-pointer" onClick={handleNext} src='/assets/chevron-right.svg' />
    </div>
  )
}

export default ChangeMonthBtns