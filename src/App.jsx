import { Route, Routes } from "react-router"
import Starter from "./components/Starter"


function App() {

  return (
    <div className="flex justify-center items-stretch min-h-screen">
      <div className=" max-w-94 border border-black ">
        <Routes>
          <Route index element={<Starter />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
