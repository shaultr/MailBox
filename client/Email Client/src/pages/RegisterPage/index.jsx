
import styles from './style.module.css';
import Btn from '../../components/Btn'
import { NavLink } from 'react-router-dom';
import { axiosReq } from '../../functions/axiosReq';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const df = new FormData(e.target)
    const detailsUser = Object.fromEntries(df);
    const fullName = `${detailsUser.firstName} ${detailsUser.lastName}`;
    console.log(detailsUser);
    try {
      const res = await axiosReq({ method: 'POST', url: `/users/register`,body: {...detailsUser, fullName: fullName} });
      if (res) navigate('/login')
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>your first MailBox is here</h1>
        <form className={styles.inputs} onSubmit={handelSubmit}>

          <div className={styles.star}>
            <p>First Name</p>
            <p style={{ color: 'red' }}>*</p>
          </div>
          <input type='text' className={styles.input} name={"firstName"} id={'fname'} />
          <div className={styles.star}>
            <p>Last Name</p>
            <p style={{ color: 'red' }}>*</p>
          </div>
          <input type='text' className={styles.input} name={"lastName"} id={'lname'} />
          <div className={styles.star}>
            <p>Our Email Adress</p>
            <p style={{ color: 'red' }}>*</p>
          </div>
          <input type='email' className={styles.input} name={"email"} id={'email'} />
          <div className={styles.star}>
            <p>Password</p>
            <p style={{ color: 'red' }}>*</p>
          </div>
          <input type='password' className={styles.input} name={"password"} id={'password'} />
          <div className={styles.star}>
            <p>Confirm Password</p>
            <p style={{ color: 'red' }}>*</p>
          </div>
          <input type='password' className={styles.input} name={"confirmPassword"} id={'cpassword'} />
          <Btn text={"Register"} />
        </form>

        <div className={styles.end}>
        </div>
        <div className={styles.register}>
          <div className={styles.terms}>
            <p>Allredy have an account? </p>
            <NavLink to={'/'}>
              <div className={styles.link}>Login here</div>
            </NavLink>
          </div>
          <div className={styles.terms}>

            <p>By registering, you agree to our </p>
            <NavLink to={'/register'}>
              <div className={styles.link}>Terms of Use </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
