import { useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import styles from './style.module.css'
import Badge from '../Badge'
import { NavLink } from 'react-router-dom';

export default function EmailLi() {
  let emailId = 'emailId';
  const [isFavorite, setIsFavorite] = useState(false);
  const [numOfMsg, setNumOfMsg] = useState(1);
  const classNameFavorite = (isFavorite ? "favorite" : "unfavorite");
  const handelFavorite = () => {
    setIsFavorite(!isFavorite)
  };
  return (
    <NavLink to={`${emailId}`}
      className={({ isActive }) =>
        isActive ? styles.active : ""
      }>
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.circle}>
            <img src='/images/1.webp' alt='' />
          </div>
        </div>
        <div className={styles.main}>
          <h3 className={styles.title}>moshe Koel</h3>
          <p className={styles.text}>hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ab vero, aspernatur mollitia corrupti quas dignissimos reprehenderit provident natus dolores cupiditate temporibus molestias quod id libero officia rem ullam magnam? jhon, do you remember...</p>
        </div>
        <div className={styles.end}>
          <p>11:34</p>
          {
            numOfMsg > 0 ? <Badge>45</Badge> :
              <button onClick={handelFavorite}>
                <TiStarFullOutline className={styles[classNameFavorite]} />
              </button>

          }
        </div>
      </div>
    </NavLink>

  )
}
