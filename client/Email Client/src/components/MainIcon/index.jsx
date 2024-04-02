import styles from './style.module.css';
import { NavLink} from 'react-router-dom';

export default function MainIcon({ icon, title }) {
  return (
    <NavLink to={`/${title}`} 
    className={({ isActive }) =>
    isActive ? styles.active : ""
  }>
    <div className={styles.container} title={title} >

      <div className={styles.icon}>
        {icon}
      </div>
    </div>
    </NavLink>
  )
}
