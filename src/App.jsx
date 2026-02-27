import { Route, Routes } from "react-router"
import Starter from "./components/Starter"
import Home from "./components/Home"
import Layout from "./components/shared/Layout"
import Navigation from "./components/Navigation"
import Calender from "./components/Calender"
import Document from "./components/Document"
import AddTask from "./components/AddTaskPage"
import Profile from "./components/Profile"
import { createContext, useState } from "react"


export const AllTasksContext = createContext();

function App() {
  const [tasksList, setTasksList] = useState([])

  return (
    <Layout>
      <AllTasksContext.Provider value={{ tasksList, setTasksList }}>
        <Routes>
          <Route index element={<Starter />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          <Route path="/add-task" element={<AddTask />}></Route>
          <Route path="/document" element={<Document />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Navigation />
      </AllTasksContext.Provider>
    </Layout>
  )
}

export default App
