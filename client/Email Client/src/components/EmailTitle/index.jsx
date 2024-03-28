import styles from './style.module.css'
export default function EmailTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.topLine}>
      </div>
      <div className={styles.date}>
        Tody, 28th March 2024,09:25
      </div>
      <div className={styles.title}>
      Meeting with new investors
      </div>
    </div>
  )
}
