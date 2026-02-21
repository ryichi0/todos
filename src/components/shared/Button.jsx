import React from 'react'

export function PrimaryButton({children}) {
  return (
    <button className="bg-primary text-white">{children}</button>
  )
}
export function SecondaryButton({text}) {
  return (
    <button className="bg-white">{text}</button>
  )
}
