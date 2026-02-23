import React from 'react'
import { Link } from 'react-router'

export function PrimaryButton({ text, url }) {
  return (
    <button
      className="bg-primary text-white shadow-[0_10px_20px_rgba(37,85,255,.20)] rounded-2xl relative flex justify-center items-center">
      <Link
        to={url}
        className="text-xl font-bold">
        {text}
      </Link>
      <img
        className="absolute flex right-4.5 scale-50"
        src="/icons/left-arrow.png"
        alt="left-arrow" />
    </button>
  )
}
export function SecondaryButton({ text }) {
  return (
    <button className="bg-white">{text}</button>
  )
}
