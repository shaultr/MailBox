import styles from './style.module.css'
import MsgAccordion from '../MsgAccordion'
import { useState } from 'react'
import { BiSolidShare } from "react-icons/bi";

export default function MsgLi({name, msg}) {
  const [isYou, setIsYou] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);

  return (
    <>
    <div className={styles.container} onClick={()=>setMsgOpen(!msgOpen)}>

{ isYou ?   <div className={styles.image}>
      <div className={styles.circle}>
      <img src='./images/1.webp'  alt=''/>
      </div>
    </div>:
    <BiSolidShare className={styles.backArrow} />
    
  }
      <div className={styles.main}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.text}>{msg}</p>
      </div>
      <div className={styles.end}>
        <p className={styles.date}>28.03.2024</p>
        <p className={styles.time}>09:25</p>
      </div>
      
  </div>
{ msgOpen && <MsgAccordion msg={msg}/>}
  </>
  
  )
}
