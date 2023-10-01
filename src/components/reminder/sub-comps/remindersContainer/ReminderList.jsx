/* eslint-disable react/prop-types */
import ReminderCard from './ReminderCard'
import {ScrollArea} from '@radix-ui/themes'

const ReminderList = ({reminders}) => {
  return (
    <ScrollArea className='w-full flex  items-center justify-center max-h-[450px]'>
      <div className='flex flex-col items-center py-10 gap-4'>

      {
        reminders?.map((r, i) => <ReminderCard data={r} key={i} />)
      }
      </div>
      </ScrollArea>
  )
}

export default ReminderList