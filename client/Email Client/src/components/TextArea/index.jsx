import styles from './style.module.css';

export default function TextArea() {
  return (
    <div className={styles.container}>
      <textarea className={styles.textarea} placeholder="Type your message here..." />
    </div>
  )
}
