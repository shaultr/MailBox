import styles from './style.module.css';
import TextEditor from '../../components/TextEditor';
import Btn from '../../components/Btn';
import { GoPaperclip } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
export default function MsgAccordion({msg}) {
  return (
    <>
    <div className={styles.container}>

      <div className={styles.header}>

      <div className={styles.image}>
        <div className={styles.circle}>
          <img src='./images/1.webp' alt='' />
        </div>
      </div>
        <h3>jessica cohel</h3>
        <p>Today, 01.04.2024 09:25</p>
      </div>
<p className={styles.paragraph}>{msg}</p>
      </div>
      <TextEditor />
      <div className={styles.footer}>
        <div className={styles.icons}>
          <button>
            <GoPaperclip />
          </button>
          <button>
            <FaImage />
          </button>
        </div>
        <Btn text = {"Send"} icon={<IoIosSend />} />
      </div>
    </>
  )
}
