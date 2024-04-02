import { Route, Routes } from "react-router-dom"
import MainNav from './layout/MainNav'
function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<h1>gdgdg</h1>} /> */}
        <Route path="settings" element={<MainNav/>}>

        </Route>
      </Routes>
    </>
  )
}

export default App
