
import styles from './style.module.css';
import Btn from '../../components/Btn'
import { NavLink } from 'react-router-dom';

export default function RegisterPage() {


  return (
    <div className={styles.container}>
      <div className={styles.form}>

        <h1>your first MailBox is here</h1>
        <div className={styles.inputs}>

          <p>Email</p>
          <input type='email' className={styles.input} />

          <p>Password</p>
          <input type='password' className={styles.input} />
          <p>Password</p>
          <input type='password' className={styles.input} />
          <p>Password</p>
          <input type='password' className={styles.input} />
          <p>Password</p>
          <input type='password' className={styles.input} />
        </div>
        <div className={styles.end}>
        <Btn text ={"Register"} />
        </div>
        <div className={styles.register}>
        <p>Allredy have an account? </p>
        <NavLink to={'register'}>
        <div className={styles.link}>Login here</div>
        </NavLink>
        <p>Allredy? </p>
        <NavLink to={'register'}>
        <div className={styles.link}>Login </div>
        </NavLink>
        </div>
      </div>
    </div>
  );
}
