import React, { useContext, useState } from 'react'
import PageHeader from './shared/PageHeader'
import Icon from './shared/Icon'
import { H1 } from './shared/Typo'
import { Link } from 'react-router';
import { AllTasksContext } from '../App';
import { Box, Label } from './shared/Layout';
import { PrimaryButton } from './shared/Button';



function Form() {
  const { setTasksList } = useContext(AllTasksContext)
  
  const [newTask, setNewTask] = useState({
    projectName: "",
    description: "",
    is_completed: false,
  })

  function handleForm(e) {
    e.preventDefault()
    setTasksList(prev => [...prev, newTask])
    e.target.reset()

  }

  function handleInputChange(e) {
    const name = e.target.name
    const value = e.target.value
    setNewTask((prev) => ({ ...prev, [name]: value }))
    console.log(newTask);
    
  }

  return (
    <form
      className="flex flex-col gap-4 mx-6"
      action=""
      onSubmit={handleForm}>

      <Box>
        <Label>
          project name
        </Label>
        <input
          className='text-lg capitalize placeholder-black w-full'
          type="text"
          name="projectName"
          placeholder='add new task ...'
          required
          onChange={handleInputChange}
        />
      </Box>


      <Box>
        <Label>
          description
        </Label>
        <textarea
          className='text-xs font-medium w-full h-15 placeholder-black opacity-90'
          placeholder='This application is designed for super shops.'
          name="description"
          onChange={handleInputChange}
        />
      </Box>
      
      <PrimaryButton
        type={"submit"}
        style={"primary"}
        size={"lg"}>
        add task
      </PrimaryButton>

    </form>
  )
}

export default function AddTaskPage() {

  return (
    <>
      <PageHeader>
        <Link
          to={"/home"}>
          <Icon src={'/icons/return.png'} />
        </Link>
        <H1>add project</H1>
        <Icon src={'/icons/notification.png'} />
      </PageHeader>


      <Form />
    </>
  )
}
