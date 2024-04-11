import { useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import styles from './style.module.css'
import { GrMail } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

export default function EmailLi({ emailId, content, members, date }) {


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

  const [isFavorite, setIsFavorite] = useState(false);
  const [isread, setNumOfMsg] = useState(0);
  const classNameFavorite = (isFavorite ? "favorite" : "unfavorite");
  const handelFavorite = () => {
    setIsFavorite(!isFavorite)
  };
 
  const numOfOther = members.length-2;
  return (
    <NavLink to={`${emailId}`}
      className={({ isActive }) =>
        isActive ? styles.active : ""
      }>
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.circle}>
          
            <img src={`${members[1].avatar}`} alt='' />

          </div>
        </div>
        <div className={styles.main}>
          <h4 className={styles.title}>{members[members?.length-1].fullName +', '+ members[members?.length-2].fullName + ' +' + ' ' +  numOfOther}</h4>
          <p className={styles.text}> {content} </p>
        </div>
        <div className={styles.end}>
          <p>{formattedResult}</p>
          {
            isread ? <GrMail className={styles.envelope} /> :
              <button onClick={handelFavorite}>
                <TiStarFullOutline className={styles[classNameFavorite]} />
              </button>

          }
        </div>
      </div>
    </NavLink>

  )
}
