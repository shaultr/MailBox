import styles from './style.module.css'
import MsgAccordion from '../MsgAccordion'
import { useState } from 'react'
import { BiSolidShare } from "react-icons/bi";

export default function MsgLi({ name, avatar, msg, date }) {
  function formatCustomDate(inputDate) {
    // Calculate the time difference in milliseconds
    const currentTime = new Date();
    const timeDifference = currentTime - inputDate;

    // Define the threshold for "last 24 hours" (in milliseconds)
    const twentyFourHours = 24 * 60 * 60 * 1000;
    // Format the date based on the time difference
    let formattedDate;
    if (timeDifference >= twentyFourHours) {
        // Not within the last 24 hours
        formattedDate = inputDate.toLocaleDateString('il-GB', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        });
    } else {
        // Within the last 24 hours
        formattedDate = inputDate.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    return formattedDate;
}

const inputDate = new Date(date);
const formattedResult = formatCustomDate(inputDate);

  const [isYou, setIsYou] = useState(true);
  const [msgOpen, setMsgOpen] = useState(false);

  return (
    <>
      <div className={styles.container} onClick={() => setMsgOpen(!msgOpen)}>

        {isYou ? <div className={styles.image}>
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
