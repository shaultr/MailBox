
import styles from './style.module.css';
import Btn from '../../components/Btn'
import { NavLink } from 'react-router-dom';

export default function LoginPage() {


  return (
    <div className={styles.container}>
      <div className={styles.form}>

        <h1>Welcome To MailBox</h1>
        <div className={styles.inputs}>

          <p>Email</p>
          <input type='email' className={styles.input} />

          <p>Password</p>
          <input type='password' className={styles.input} />
        </div>
        <div className={styles.end}>
        <Btn text ={"Login"} />
        <a href='#' className={styles.link}>Forgot password?</a>
        </div>
        <div className={styles.register}>
        <p>Don't have an account? </p>
        <NavLink to={'register'}>
        <div className={styles.link}>Register Here</div>
        </NavLink>
        </div>
      </div>
    </div>
  );
}
