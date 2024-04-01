import styles from './style.module.css';

export default function Confirm() {
  return (
    <div className={styles.container}>
      <p>Are you sure you want to delete this message?</p>
      <div className={styles.end}>
      <div className={styles.confirm}> Confirm   </div>
      <div className={styles.cancel}> Cancel   </div>
      </div>
    </div>

  )
}
