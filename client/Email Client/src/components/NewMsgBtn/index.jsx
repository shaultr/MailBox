import styles from './style.module.css'
import { IoMdMail } from "react-icons/io";

export default function NewMsgBtn() {
  return (
    <div className={styles.container}>
      <IoMdMail className={styles.icon} />
      <p> New Message  </p>
    </div>
  )
}
