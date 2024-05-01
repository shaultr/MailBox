
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
    try {
      console.log("kkk");
      const res = await axiosReq({ method: 'POST', url: `/users/register`, body: { ...detailsUser, fullName: fullName } });
      if (res) navigate('/login')
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
        <p>Enter your email adress and we'll send you a link <br /> to reset your password</p>
        <form className={styles.inputs} onSubmit={handelSubmit}>

          <div className={styles.star}>
            <input type='text' className={styles.input} placeholder='Email Adress' name={"email"} id={'email'} />
            <p style={{ color: 'red' }}>*</p>
          </div>
          <div className={styles.star}>
            <input type='text' className={styles.input} placeholder='First Name' name={"firstName"} id={'fname'} />
            <p style={{ color: 'red' }}>*</p>
          </div>
          <div className={styles.star}>
            <input type='text' className={styles.input} placeholder='Lest Name' name={"lestName"} id={'lname'} />
            <p style={{ color: 'red' }}>*</p>
          </div>
          <div className={styles.star}>
            <input type='text' className={styles.input} placeholder='Passwors' name={"passwors"} id={'passwors'} />
            <p style={{ color: 'red' }}>*</p>
          </div>
          <input className={styles.submit} type='submit' value='Register' />
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
      <img className={styles.img} src ='plane.png' ></img>
    </div>
  );
}
