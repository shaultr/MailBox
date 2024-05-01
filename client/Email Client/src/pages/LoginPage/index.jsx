
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { axiosReq } from '../../functions/axiosReq';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../../context/DataContext'
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function RegisterPage() {
  const { user, setUser } = useContext(DataContext)

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
        <div className={styles.header}>
          <h3>
            Mailbox - communicate full-world
          </h3>
        </div>
        <h1>Welcome to MailBox</h1>
        <form className={styles.inputs} onSubmit={handelSubmit}>
          <div className={styles.inputsDiv}>

            <div className={styles.star}>
              <input type='text'
                className={styles.input}
                placeholder="Email Adress"
                name={"email"}
                id={'email'} />
              <p style={{ color: 'red' }}>*</p>
            </div>

            <div className={styles.star}>
              <input type='text' className={styles.input} placeholder='Passwors' name={"passwors"} id={'passwors'} />
              <p style={{ color: 'red' }}>*</p>
            </div>
            <a href='#' className={styles.link}>Forgot password?</a>
          </div>
          <input className={styles.submit} type='submit' value='Sign in' />
        </form>

        <div className={styles.end}>
        </div>
        <div className={styles.register}>
          <div className={styles.terms}>
            <p>Don't have an account? </p>
            <NavLink to={'register'}>
              <div className={styles.link}>Register Here</div>
            </NavLink>
          </div>
          <div className={styles.terms}>
            <div className={styles.or}>
              <div className={styles.line}></div>
              <p>OR</p>
              <div className={styles.line}></div>
            </div>

          </div>
          <div className={styles.google}>
            <img src='Gmail_icon.png' width="30px" />
            Sign in with Google
          </div>
        </div>
      </div>
      <img className={styles.img} src='plane.png' ></img>
    </div>
  );
}
