import { Route, Routes } from "react-router-dom"
import MainNav from './layout/MainNav'
import EmailsNav from './layout/EmailsNav'
import EmailsList from './layout/EmailsList'
import EmailPage from './pages/EmailPage'

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<h1>login. write after /: "setting"</h1>} />

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
