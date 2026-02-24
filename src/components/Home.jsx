import React from 'react'
import Icon from './shared/Icon'
import PageHeader from './shared/PageHeader'


export function Profile() {
  return (
      <PageHeader>
        <div className="flex gap-4 items-center">
          <img className="w-11" src="/images/profile-img.png" alt="profile-img" />
          <div>
            <span>سلام</span>
            <p className="text-2xl font-bold">غزل محمودی</p>
          </div>
        </div>
        <Icon src={"/icons/notification.png"} alt={"notification"} />
      </PageHeader>
  )
}

export default function Home() {

  return (
    <>
      <Profile />
      
    </>
  )
}
