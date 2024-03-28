import styles from './style.module.css'
import { IoMdMail } from "react-icons/io";

export default function NewMsgBtn() {
  return (
    <div className={styles.container}>
      
      <div className={styles.icon}>
        <IoMdMail />
      </div>
      <p> New Message  </p>
    </div>
  )
}
