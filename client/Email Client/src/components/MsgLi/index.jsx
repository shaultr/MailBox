import styles from './style.module.css'
export default function MsgLi() {
  return (
    <div className={styles.container}>

    <div className={styles.image}>
      <div className={styles.circle}>
      <img src='./images/1.webp'  alt=''/>

      </div>
    </div>
      <div className={styles.main}>
        <h3 className={styles.title}>moshe Koel</h3>
        <p className={styles.text}>hey jhon, do you remember...</p>
      </div>
      <div className={styles.end}>
        <p className={styles.date}>28.03.2024</p>
        <p className={styles.time}>09:25</p>
      </div>
  </div>
  )
}
