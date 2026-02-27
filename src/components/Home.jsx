import React, { useContext } from 'react'
import Icon from './shared/Icon'
import PageHeader from './shared/PageHeader'
import { Link } from 'react-router'
import { PrimaryButton } from './shared/Button'
import { AllTasksContext } from '../App'


function Profile() {
  return (
    <PageHeader>
      <div className="flex gap-4 items-center">
        <img className="w-11" src="/images/profile-img.png" alt="profile-img" />
        <div>
          <span>hello</span>
          <p className="text-2xl font-bold">Eiva</p>
        </div>
      </div>
      <Icon src={"/icons/notification.png"} alt={"notification"} />
    </PageHeader>
  )
}

function HeroSection({ todos_completed, todos_total }) {
  let doneTaskPercentage = Math.round(todos_completed * 100 / todos_total)

  return (
    <div
      className="bg-primary text-white w-full p-4 rounded-2xl flex gap-4 justify-between min-h-35">

      <div
        className="w-6/12 flex flex-col items-start justify-between">
        <p
          className="text-sm text-gray-100 capitalize">
          {doneTaskPercentage <= 50
            ? "keep going, you have a lot ahead of you."
            : "your today's task almost done!"
          }
        </p>
        <PrimaryButton
          size={"sm"}
          style={"secondary"}
          url={"/calender"}>
          view task
        </PrimaryButton>
      </div>

      <div
        className="w-4/12 relative flex items-center justify-center">
        <div
          className='w-full aspect-square rounded-full bg-conic-90 from-white to-primary/10'>
          <div
            className='w-full h-full rounded-full scale-75 bg-white'>

          </div>
        </div>
        <span className="absolute text-black font-bold text-sm">{doneTaskPercentage}%</span>
      </div>


      <div
        className="w-1/12 text-right">
        ...
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <>
      <Profile />
      <div className="mx-4">
        <HeroSection todos_completed={7} todos_total={8} />
      </div>
    </>

  )
}
