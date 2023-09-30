/* eslint-disable react/prop-types */

const FormButtons = ({errors}) => {
  return (
    <div className="flex gap-2 justify-end">
      <button type="button" className="bg-[#626262] capitalize w-[108px] h-[49px] text-white rounded-[4px]">cancel</button>
      <button type="submit" className="bg-[#394ABC] capitalize w-[108px] h-[49px] text-white rounded-[4px] disabled:cursor-not-allowed" disabled={errors?.title || errors?.time || errors?.date }>save</button>
    </div>
  )
}

export default FormButtons