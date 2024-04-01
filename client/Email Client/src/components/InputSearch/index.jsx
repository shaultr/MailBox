import { useState } from 'react'

import styles from './style.module.css'
import { FaSearch } from "react-icons/fa";
export default function InputSearch() {
  const [text, setText] = useState('');

  const handelText = (e) => {
    setText(e.target.value)
  }
  return (

    <div onChange={handelText} className={styles.container}>
      <input className={styles.container} placeholder='Search' value={text} />
      {!text && <div className={styles.icon}>
        <FaSearch />
      </div>}
    </div>
  )
}
