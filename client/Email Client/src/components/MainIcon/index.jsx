import styles from './style.module.css';

export default function MainIcon({ icon, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icon}
      </div>
    </div>
  )
}
