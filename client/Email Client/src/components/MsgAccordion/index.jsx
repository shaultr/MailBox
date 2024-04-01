import styles from './style.module.css';
import { IoIosSend } from "react-icons/io";

export default function MsgAccordion() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>

      <div className={styles.image}>
        <div className={styles.circle}>
          <img src='./images/1.webp' alt='' />
        </div>
      </div>
        <h3>jessica cohel</h3>
        <p>Today, 01.04.2024 09:25</p>
      </div>
<p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolorem sunt inventore tempora neque fugiat vel alias ducimus quod beatae laboriosam corporis, consectetur quaerat blanditiis accusamus optio autem sed ea!</p>
      </div>

  )
}
