import { Route, Routes } from "react-router-dom"
import MainNav from './layout/MainNav'
import EmailsNav from './layout/EmailsNav'
import EmailsList from './layout/EmailsList'
import EmailPage from './pages/EmailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useState } from "react"
import DataContext from './context/DataContext'

function App() {
  const [user, setUser] = useState(false)
  
  // if (!user) { return (<LoginPage />) }
  // else{}
  return (<>
    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route element={<MainNav />}>
        <Route path="settings" element={<></>} />
        <Route path="timer" element={<></>} />
        <Route path="emails" element={<EmailsNav />} >
          <Route path=":emailType" element={<EmailsList />}>
            <Route path=":emailId" element={<EmailPage />}>
            </Route>
          </Route>
        </Route>
        <Route path="tasks" element={<></>} />
        <Route path="search" element={<></>} />
        <Route path="statistics" element={<></>} />
        <Route path="video" element={<></>} />

      </Route>
    </Routes>
  </>
  )
}

export default App
