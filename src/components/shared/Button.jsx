import React from 'react'
import { Link } from 'react-router'

export function PrimaryButton({ children, url, onClick }) {
  return (
    <Link
      to={url}
      className="text-base text-white capitalize font-bold bg-primary shadow-[0_10px_20px_rgba(37,85,255,.20)] rounded-3xl relative flex justify-center items-center py-4"
      onClick={onClick}>
      {children}
    </Link>

  )
}
export function SecondaryButton({ text }) {
  return (
    <button className="bg-white">{text}</button>
  )
}
