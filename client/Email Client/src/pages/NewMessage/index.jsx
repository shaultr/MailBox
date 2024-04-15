
import styles from './style.module.css';
import Btn from '../../components/Btn'
import TextEditpr from '../../components/TextEditor'
import { NavLink } from 'react-router-dom';
import { axiosReq } from '../../functions/axiosReq';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export default function NewMessage() {
  const [text, setText] = useState('');

  const handelText = (e) => {
    setText(e.target.value)
  }
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const df = new FormData(e.target)
    const detailsUser = Object.fromEntries(df);
    const fullName = `${detailsUser.firstName} ${detailsUser.lastName}`;
    console.log(detailsUser);
    try {
      const res = await axiosReq({ method: 'POST', url: `/users/register`, body: { ...detailsUser, fullName: fullName } });
      if (res) navigate('/login')
    }
    catch (error) {
      console.log(error);
    }
  }

  return (

    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>New message</h2>
        </div>
        <form className={styles.inputs} onSubmit={handelSubmit}>
          <div className={styles.inputSub}>
            <h3>Subject</h3>
            <input type='text' placeholder='Submit...' className={styles.input} name={"subject"} id={'subject'} />
          </div>
          <div className={styles.inputMem}>
            <h3>Members</h3>
            <div className={styles.members} >
              <input onChange={handelText} type='text' className={styles.input} name={"members"} id={'members'} />
              {text && <div className={styles.addMembers}>{text}</div>
              }            </div>
            <button className={styles.add}>Add</button>

          </div>
        </form>
        <div className={styles.editor}>
          <h3>Message</h3>
          <TextEditpr />
        </div>
      </div>
    </>
  );
}
