import styles from './style.module.css'
import { FaSearch } from "react-icons/fa";
export default function InputSearch() {
  return (
    <div className={styles.container}>
       <p>Search</p>
      <div className={styles.icon}>
       <FaSearch />
      </div>
    </div>
  )
}
