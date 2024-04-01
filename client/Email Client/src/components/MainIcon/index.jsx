import styles from './style.module.css';
import { IoIosSend } from "react-icons/io";

export default function MainIcon({ icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icon}
      </div>
    </div>
  )
}
