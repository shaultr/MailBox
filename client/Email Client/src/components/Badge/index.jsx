import styles from './style.module.css'

export default function Badge({num}) {
  return (
    <div className={styles.main}>
        {num}
    </div>
  )
}
