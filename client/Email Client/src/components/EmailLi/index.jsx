import { useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import styles from './style.module.css'
import { GrMail } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { shortFormatDate } from '../../functions/dateFunctions';

export default function EmailLi({ emailId, content, members, date }) {
console.log("oooooo: " + emailId);
const inputDate = new Date(date);
const formattedResult = shortFormatDate(inputDate);

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
