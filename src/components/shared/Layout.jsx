import React from 'react'

export default function Layout({ children }) {
  return (
    <div
      className="bg-[url(/images/bg-gradient.png)] w-full max-w-94 h-dvh mx-auto relative">
      {children}
    </div>
  )
}

export function Box({ children }) {
  return (
    <div
      className="w-full p-4 rounded-xl bg-white shadow-[0px_4px_32px_rgba(0,0,0,0.06)] flex flex-col gap-1.5 justify-between items-start">
      {children}
    </div>
  )
}

export function Label({ children }) {
  return (
    <label
      htmlFor=""
      className='text-xs font-light text-gray-500 capitalize'>
      {children}
    </label>
  )
}