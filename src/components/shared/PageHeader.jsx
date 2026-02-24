import React from 'react'

export default function PageHeader({children}) {
  return (
    <div className="px-6 py-7 flex items-center justify-between">
      {children}
    </div>
  )
}
