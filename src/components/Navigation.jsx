import React from 'react'
import Icon from './shared/Icon'

export default function Navigation() {
  return (
    <ul className="flex justify-between items-center px-8 py-4 bg-primary/30 rounded-t-2xl fixed bottom-0 w-full">
      <li><Icon src={"icons/home.png"}/></li>
      <li><Icon src={"icons/calendar.png"}/></li>
      <li><Icon src={"icons/add-button.png"}/></li>
      <li><Icon src={"icons/document.png"}/></li>
      <li><Icon src={"icons/profile.png"}/></li>
    </ul>
  )
}
