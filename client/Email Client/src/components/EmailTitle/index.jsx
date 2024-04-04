import styles from './style.module.css'
export default function EmailTitle({title}) {
  return (
    <div className={styles.container}>

      <div className={styles.date}>
        Tody, 28th March 2024,09:25
      </div>
      <div className={styles.title}>
      {title}
      </div>
    </div>
  )
}
