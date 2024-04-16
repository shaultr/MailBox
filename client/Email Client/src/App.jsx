import { Route, Routes, useNavigate } from "react-router-dom"
import MainNav from './layout/MainNav'
import EmailsNav from './layout/EmailsNav'
import NewMessage from './pages/NewMessage'
import EmailsList from './layout/EmailsList'
import EmailPage from './pages/EmailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useState, useContext } from "react"
import DataContext from './context/DataContext'
import { useEffect } from "react"
import { axiosReq } from './functions/axiosReq';


function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState({})

  const getUserByToken = async () => {
    if(!localStorage.token) throw 'no token'
    const res = await axiosReq({ method: 'GET', url: `/users` });
    console.log(res);
    setUser(res)
  }
  useEffect(() => {
    getUserByToken()
  }, [])
  return (<>
    <DataContext.Provider value={{ user, setUser }}>
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route element={<MainNav />}>
          <Route path="settings" element={<></>} />
          <Route path="timer" element={<></>} />
          <Route path="emails" element={<EmailsNav />} >
            <Route path="newMessage" element={<NewMessage />} />
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
    </DataContext.Provider>
  </>
  )
}

export default App
