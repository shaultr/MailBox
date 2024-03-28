import styles from './style.module.css'
import Badge from '../EmailLi'
export default function EmailLi() {
  return (
    <div >
      <div className={styles.img}>
        <img src="./images/1.webp" alt="" />
        <div>
          <h3>moshe Koel</h3>
          <p>hey jhon...</p>
        </div>
        <div >
          <p>11:34</p>
          <Badge>45</Badge>
        </div>
      </div>
    </div>
  )
}
