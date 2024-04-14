import styles from './style.module.css';

export default function Btn({text, icon, type}) {
  return (
    <button type ={type} className={styles.container}>
    <div className={styles.contant}>
      <p> {text}   </p>
      <p> {icon}   </p>
      <div className={styles.icon}>
      </div>
      </div>
    </button>
  )
}
