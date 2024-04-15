import styles from './style.module.css'
import { IoMdMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';
export default function NewMsgBtn() {
  return (
    <NavLink to={'newMessage'}>
      <div className={styles.container}>
        <IoMdMail className={styles.icon} />
        <p> New Message  </p>
      </div>
    </NavLink>
  )
}
