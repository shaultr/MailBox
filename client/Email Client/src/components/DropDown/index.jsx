import styles from './style.module.css'
export default function DropDown({ icon, name }) {

  return (

      <div className={styles.container}>
        {icon}
        <div className={styles.name}>
          {name}
        </div>
      </div>
  )
}
