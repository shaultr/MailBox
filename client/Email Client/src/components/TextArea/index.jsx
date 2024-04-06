import styles from './style.module.css';
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa6";
import { IoColorFill } from "react-icons/io5";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

export default function TextArea() {
  return (
    <div className={styles.container}>
      {/* <textarea className={styles.textarea} placeholder="Type your message here..." /> */}

      <div className={styles.textTools}>
        <div className={styles.textEditorToolbar}>
          <div className={styles.tool}>
          <FaBold />
          </div>
          <div className={styles.tool}>
          <FaItalic />
          </div>
          <div className={styles.tool}>
          <FaUnderline />

          </div>
          <div className={styles.tool}>
          <IoColorFill />

          </div>
        </div>
        <div className={styles.textAlignmentToolbar}>
        <div className={styles.tool}>
        <FaAlignLeft />

          </div>
          <div className={styles.tool}>
          <FaAlignCenter />

          </div>
          <div className={styles.tool}>
          <FaAlignRight />

          </div>
          <div className={styles.tool}>
          <FaAlignJustify />

          </div>   
        </div>
      </div>
    </div>
  )
}
