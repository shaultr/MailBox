import styles from './style.module.css'
import Badge from '../Badge'
export default function EmailLi() {
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
          <p>11:34</p>
          <Badge>45</Badge>
        </div>
    </div>
  )
}
