import React from 'react'
import Icon from './shared/Icon'
import { Link } from 'react-router'

export default function Navigation() {
  return (
    <ul className="flex justify-between items-center px-8 py-4 bg-primary/15 rounded-t-2xl absolute w-full bottom-0">
      <Link to={"/profile"}><li><Icon src={"icons/profile.png"}/></li></Link>
      <Link to={"/document"}><li><Icon src={"icons/document.png"}/></li></Link>
      <Link to={"/add-task"}><li><Icon src={"icons/add-button.png"}/></li></Link>
      <Link to={"/calender"}><li><Icon src={"icons/calendar.png"}/></li></Link>
      <Link to={"/home"}><li><Icon src={"icons/home.png"}/></li></Link>
      
      
      
      
    </ul>
  )
}
