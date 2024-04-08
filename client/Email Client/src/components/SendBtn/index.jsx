import styles from './style.module.css';
import { IoIosSend } from "react-icons/io";
<IoIosSend />

export default function SendBtn() {
  return (
    <div className={styles.container}>
    <div className={styles.contant}>
      <p> Send   </p>
      <div className={styles.icon}>
      </div>
      </div>
    </div>
  )
}
