import styles from './style.module.css'
import { NavLink } from 'react-router-dom'
export default function EmailType({ icon, name }) {
  return (
    <NavLink to={`${name.toLowerCase()}`} 
    className={({ isActive }) =>
      isActive ? styles.active : ""
    }>
    <div className={styles.container}>
      {icon}
      <div className={styles.name}>
        {name}
      </div>
    </div>
  </NavLink>
  )
}
