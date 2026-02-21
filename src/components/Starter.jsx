import React from 'react'
import { PrimaryButton } from './shared/Button'
import { Link } from 'react-router'

export default function Starter() {
  return (
    <div className="">
      <div className="relative w-full flex justify-center items-center">
        <img className="h-full w-full object-cover" src="/images/blur-gradient.png" alt="blur-gradient" />
        <img className="absolute inset-0 top-10 z-5 scale-75" src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="text-center flex flex-col gap-4 px-5.5">
        <h2>Task Management & To-Do List</h2>
        <p className="mx-6 mb-4">This productive tool is designed to help
          you better manage your task
          project-wise conveniently!</p>
        <PrimaryButton><Link>lets start</Link></PrimaryButton>
      </div>
    </div>
  )
}
