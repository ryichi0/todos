import React, { useState } from 'react'
import PageHeader from './shared/PageHeader'
import Icon from './shared/Icon'
import { H1 } from './shared/Typo'
import { PrimaryButton } from './shared/Button';
import { Link } from 'react-router';


function FormInputBox({ children }) {
  return (
    <div
      className="w-full p-4 rounded-xl bg-white shadow-[0px_4px_32px_rgba(0,0,0,0.06)] flex flex-col gap-1.5 items-start">
      {children}
    </div>
  )
}
function FormLabel({ children }) {
  return (
    <label
      htmlFor=""
      className='text-xs font-light text-gray-500 capitalize'>
      {children}
    </label>
  )
}

export default function AddTask() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    projectName: "",
    description: "",
  })

  function handleInputChange(e) {
    const name = e.target.name
    const value = e.target.value
    setNewTask((prev) => {
      return { ...prev, [name]: value }
    })
    console.log(newTask);


  }

  function addTask() {
    setTasks(prev => [...prev, newTask])
    setNewTask({})
    console.log(tasks);
    
  }

  function handleForm (e) {
    e.preventDefault()
    console.log(e);
    
  }
  return (
    <div>

      <PageHeader>
        <Link
          to={"/home"}>
          <Icon src={'/icons/return.png'} />
        </Link>
        <H1>add project</H1>
        <Icon src={'/icons/notification.png'} />
      </PageHeader>

      <form
        className="flex flex-col gap-4 mx-6"
        action=""
        onSubmit={handleForm}>

        <FormInputBox>
          <FormLabel>
            project name
          </FormLabel>
          <input
            className='text-lg capitalize placeholder-black w-full'
            type="text"
            name="projectName"
            placeholder='add new task ...'
            required
            onChange={handleInputChange}
          />
        </FormInputBox>


        <FormInputBox>
          <FormLabel>
            description
          </FormLabel>
          <textarea
            className='text-xs font-medium w-full h-30 placeholder-black opacity-90'
            placeholder='This application is designed for super shops. By using this application they can enlist all their products in one place and can deliver. Customers will get a one-stop solution for their daily shopping.'
            name="description"
            onChange={handleInputChange}
          />
        </FormInputBox>


        <PrimaryButton
          type='submit'
          onClick={addTask}>
          add task
        </PrimaryButton>

      </form>
    </div>
  )
}
