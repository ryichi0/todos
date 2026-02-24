import React from 'react'

export default function Layout({ children }) {
  return (
    <div
      className="bg-[url(/images/bg-gradient.png)] w-full max-w-94 h-dvh mx-auto relative">
      {children}
    </div>
  )
}
