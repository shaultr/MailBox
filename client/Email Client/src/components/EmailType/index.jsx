import styles from './style.module.css'
import Badge from '../../components/Badge'
import { NavLink } from 'react-router-dom'
export default function EmailType({ icon, name, num }) {

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
          {num > 0 && <Badge num={num}/>}
      </div>
    </NavLink>
  )
}
