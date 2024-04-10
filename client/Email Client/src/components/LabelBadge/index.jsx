import styles from './style.module.css'
export default function LabelBadge({ color, whideRec, heightRec, whideSqu, heightSqu }) {
  return (
    <div className={styles.container}>
      <div className={styles.ractangel}
      style={{ backgroundColor: color, width: whideRec, height: heightRec }}>
      </div>
      <div className={styles.rotated}
      style={{ backgroundColor: color, width: whideSqu, height: heightSqu }}>
      </div>
    </div>
  )
}

