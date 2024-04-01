import styles from './style.module.css';
import Confirm from '../Confirm'
export default function Popup() {
  return (
    <div className={styles.container}>
      <Confirm />
    </div>
  )
}
