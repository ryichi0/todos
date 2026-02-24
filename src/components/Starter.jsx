import React from 'react'
import { PrimaryButton } from './shared/Button'
import Icon from './shared/Icon'

export default function Starter() {
  return (
    <div className="h-full flex flex-col items-center gap-6">
      <img
        className="w-8/12 mt-18"
        src="/images/avatar.png"
        alt="avatar" />
      <div
        className="text-center flex flex-col gap-4 px-5.5">
        <h2
          className='text-2xl font-bold'>
          Task Management & <br />To-Do List</h2>
        <p
          className="mx-7 mb-4 text-sm text-gray-600">
          This productive tool is designed to help
          you better manage your task
          project-wise conveniently!</p>
        <PrimaryButton url={"/home"}>
          let's start
          <Icon
            className="absolute right-4"
            src={"/icons/arrow.png"} />
        </PrimaryButton>
      </div>
    </div>
  )
}
