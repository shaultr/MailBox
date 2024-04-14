import styles from './style.module.css'
import MsgAccordion from '../MsgAccordion'
import { useState } from 'react'
import { BiSolidShare } from "react-icons/bi";
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { useEffect } from 'react';
import { shortFormatDate } from '../../functions/dateFunctions';

export default function MsgLi({id, name, avatar, msg, date }) {
  const { user } = useContext(DataContext)
  
  const inputDate = new Date(date);
  const formattedResult = shortFormatDate(inputDate);
  
  const [isYou, setIsYou] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);
  useEffect(() => {
    if (user._id === id) {
      setIsYou(true);
    }

  }, [])
  return (
    <>
      <div className={styles.container} onClick={() => setMsgOpen(!msgOpen)}>

        {!isYou ? <div className={styles.image}>
          <div className={styles.circle}>
            <img src={`${avatar}`} alt='' />
          </div>
        </div> :
          <BiSolidShare className={styles.backArrow} />

        }
        <div className={styles.main}>
          <h3 className={styles.title}>{name}</h3>

          <p className={styles.text}>{msg}</p>
        </div>
        <div className={styles.end}>
          <p className={styles.date}>{formattedResult}</p>
        </div>

      </div>
      {msgOpen && <MsgAccordion msg={msg} name={name} />}
    </>

  )
}
