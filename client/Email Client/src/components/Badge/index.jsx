import styles from './style.module.css'

export default function Badge({children}) {
  return (
    <div className={styles.main}>
        {children}
    </div>
  )
}
