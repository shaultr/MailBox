
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

          <p>First Name</p>
          <input type='password' className={styles.input} />
          <p>Last Name</p>
          <input type='password' className={styles.input} />
          <p>Our Email Adress</p>
          <input type='password' className={styles.input} />
          <p>Password</p>
          <input type='password' className={styles.input} />
          <p>Confirm Password</p>
          <input type='password' className={styles.input} />
        </div>
        <div className={styles.end}>
          <Btn text={"Register"} />
        </div>
        <div className={styles.register}>
          <div className={styles.terms}>
          <p>Allredy have an account? </p>
          <NavLink to={'login'}>
            <div className={styles.link}>Login here</div>
          </NavLink>
          </div>
          <div className={styles.terms}>

            <p>By registering, you agree to our </p>
            <NavLink to={'register'}>
              <div className={styles.link}>Terms of Use </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
