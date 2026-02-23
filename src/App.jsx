import { Route, Routes } from "react-router"
import Starter from "./components/Starter"
import Home from "./components/Home"


function App() {

  return (
    <div className="flex justify-center items-stretch min-h-screen">
      <div className="min-w-94 max-w-100 border border-black ">
        <Routes>
          <Route index element={<Starter />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
