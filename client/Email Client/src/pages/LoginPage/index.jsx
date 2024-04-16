
import styles from './style.module.css';
import Btn from '../../components/Btn'
import { NavLink } from 'react-router-dom';
import { axiosReq } from '../../functions/axiosReq';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../../context/DataContext'

export default function LoginPage() {
  const { user, setUser } = useContext(DataContext)
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const df = new FormData(e.target)
    const detailsUser = Object.fromEntries(df);
    try {
        const res = await axiosReq({ method: 'POST', url: `/users/login`, body: detailsUser });
        localStorage.token = res.token;
        setUser(res.user)
      if (res) navigate('/emails/inbox')
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>

        <h1>Welcome To MailBox</h1>

          <form className = {styles.inputs} onSubmit={handelSubmit}>
            <p>Email</p>
            <input type='email' className={styles.input} name={"email"} id={'email'} />
            <p>Password</p>
            <input type='password' className={styles.input} name={"password"} id={'password'} />
            <div className={styles.end}>
              <Btn text={"Login"} />
              <a href='#' className={styles.link}>Forgot password?</a>
            </div>
          </form>
        </div>
        <div className={styles.register}>
          <p>Don't have an account? </p>
          <NavLink to={'register'}>
            <div className={styles.link}>Register Here</div>
          </NavLink>
        </div>
      </div>
  );
}
