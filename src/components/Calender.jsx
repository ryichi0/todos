import React, { useContext } from 'react'
import PageHeader from './shared/PageHeader'
import Icon from './shared/Icon'
import { H1 } from './shared/Typo'
import { Link } from 'react-router'
import { AllTasksContext } from '../App'
import { Box, Label } from './shared/Layout'

export default function Calender() {
  const { tasksList } = useContext(AllTasksContext)
  return (
    <div>
      <PageHeader>
        <Link to={"/home"}><Icon src={'/icons/return.png'} /></Link>
        <H1>today's task</H1>
        <Icon src={'/icons/notification.png'} />
      </PageHeader>
      {tasksList.map(task => {
        return (
          <Box>
            <Label>
              project group
            </Label>
            {task.projectName}
            <div className="flex justify-between items-center w-full">
              {task.is_completed === true 
              ? <span className="text-green-600">done</span> 
              : <span className="text-red-600">not completed</span> 
              }
              
            </div>
          </Box>
        )
      })}
    </div>
  )
}
