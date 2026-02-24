import React from 'react'

export default function Icon({ src, alt, className }) {
  return (
    <img
      className={`w-6 ${className}`}
      src={src}
      alt={alt} />
  )
}
