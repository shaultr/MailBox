import { useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import styles from './style.module.css'
import { GrMail } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

export default function EmailLi({ emailId, name, img }) {

  const [isFavorite, setIsFavorite] = useState(false);
  const [isread, setNumOfMsg] = useState(0);
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
            {img}
            {/* <img src='/images/1.webp' alt='' /> */}
          </div>
        </div>
        <div className={styles.main}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.text}>hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ab vero, aspernatur mollitia corrupti quas dignissimos reprehenderit provident natus dolores cupiditate temporibus molestias quod id libero officia rem ullam magnam? jhon, do you remember...</p>
        </div>
        <div className={styles.end}>
          <p>11:34</p>
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
