import React from 'react'
import PageHeader from './shared/PageHeader'
import Icon from './shared/Icon'
import { H1 } from './shared/Typo'
import { Link } from 'react-router'

export default function Calender() {
  return (
    <div>
      <PageHeader>
        <Link to={"/home"}><Icon src={'/icons/return.png'} /></Link>
        <H1>today's task</H1>
        <Icon src={'/icons/notification.png'} />
      </PageHeader>
    </div>
  )
}
