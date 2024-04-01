import styles from './style.module.css'
export default function EmailType({icon, name}) {
  return (
    <div className={styles.container}>

      {icon}

     <div className={styles.name}>
      {name}
      </div>
    </div>
  )
}
