import React from 'react'
import { useLocation } from 'react-router'
import Icon from './shared/Icon'
import Layout from './shared/Layout'
import Navigation from './Navigation'


export function Profile() {
  return (
    <Layout>
      <div className="flex justify-between items-center ">
        <div className="flex gap-4 items-center">
          <img className="w-11" src="/images/profile-img.png" alt="profile-img" />
          <div>
            <span>سلام</span>
            <p className="text-2xl font-bold">آناهیتا غلامی</p>
          </div>
        </div>
        <Icon src={"/icons/notification.png"} alt={"notification"} />
      </div>
    </Layout>
  )
}

export default function Home() {

  return (
    <>
      <Profile />
      <Navigation />
    </>
  )
}
