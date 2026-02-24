import { Route, Routes } from "react-router"
import Starter from "./components/Starter"
import Home from "./components/Home"
import Layout from "./components/shared/Layout"
import Navigation from "./components/Navigation"
import Calender from "./components/Calender"
import Document from "./components/Document"
import AddTask from "./components/AddTask"
import Profile from "./components/Profile"

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Starter />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/calender" element={<Calender />}></Route>
        <Route path="/add-task" element={<AddTask />}></Route>
        <Route path="/document" element={<Document />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Navigation />
    </Layout>
  )
}

export default App
