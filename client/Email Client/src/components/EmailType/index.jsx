import styles from './style.module.css'
import Badge from '../../components/Badge'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export default function EmailType({ icon, name, num }) {
  const [number, setNam] = useState(2);

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
          {number > 0 && <Badge num={num}/>}
      </div>
    </NavLink>
  )
}
