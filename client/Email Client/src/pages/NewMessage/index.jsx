import styles from './style.module.css';
import Btn from '../../components/Btn'
import TextEditpr from '../../components/TextEditor'
import { NavLink } from 'react-router-dom';
import { axiosReq } from '../../functions/axiosReq';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useContext } from 'react';
import DataContext from '../../context/DataContext'

export default function NewMessage() {
  const { user } = useContext(DataContext)
  const [subject, setSubject] = useState('');
  const [contant, setContant] = useState('');
  const [stringMembers, setStringMembers] = useState('');
  const [membersValue, setMembersValue] = useState('');

  const handleTextChange = (e) => {
    setMembersValue(e.target.value);
  }

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const objForm = {
      subject: subject,
      contant: contant,
      members: stringMembers.split(','),
      from: user._id
    }
    // try {
    //   const res = await axiosReq({ method: 'POST', url: `/chat`, body: {} });
    //   if (res) navigate('/emails/inbox')
    // }
    // catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>New message</h2>
      </div>
      <form className={styles.inputs} onSubmit={handelSubmit}>
        <div className={styles.inputSub}>
          <h3>Subject</h3>
          <input
            type='text'
            placeholder='Submit...'
            className={styles.input}
            name={"subject"}
            id={'subject'}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={styles.inputMem}>
          <h3>Members</h3>
          <div className={styles.members}>
            <input type='text' className={styles.input} name={"members"} id={'members'} onChange={handleTextChange} value={membersValue} />
            {stringMembers && <div className={styles.addMembers}>{stringMembers}</div>}
          </div>
          <button className={styles.add} onClick={() => setStringMembers(membersValue)}>Add</button>
        </div>
        <div className={styles.editor}>
          <h3>Message</h3>
          <TextEditpr setContant={setContant}/>
        </div>
      </form>
    </div>
  );
}
