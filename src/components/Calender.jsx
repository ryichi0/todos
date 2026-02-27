import React, { useContext } from 'react'
import PageHeader from './shared/PageHeader'
import Icon from './shared/Icon'
import { H1 } from './shared/Typo'
import { Link } from 'react-router'
import { AllTasksContext } from '../App'

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
          <h1>{task.projectName}</h1>
        )
      })}
    </div>
  )
}
