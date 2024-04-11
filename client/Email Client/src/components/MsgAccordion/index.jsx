import styles from './style.module.css';
import TextEditor from '../../components/TextEditor';
// <TextEditor />

export default function MsgAccordion({name, msg}) {
  return (
    <>
    <div className={styles.container}>

      <div className={styles.header}>

      <div className={styles.image}>
        <div className={styles.circle}>
          <img src='./images/1.webp' alt='' />
        </div>
      </div>
        {/* <h3>j{name}</h3> */}
        {/* <p>Today, 01.04.2024 09:25</p> */}
      </div>
<p className={styles.paragraph}>{msg}</p>
      </div>
      {/* <TextEditor /> */}

    </>
  )
}
