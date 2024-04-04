// const fakeData = require('../../fakeData');
import styles from './style.module.css';
import EmailLi from '../../components/EmailLi'
import InputSearch from '../../components/InputSearch'
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EmailsList() {

  const [emails, setEmails] = useState([])

  const getdata = async () => {
    try {
      const { data } = await axios.get('/fakeData.json');
      const isreciveds = data.users[0].emails.filter((item) => item.isRecieved === true);
      setEmails(isreciveds);
    }
    catch (err) {

    }
  };
  useEffect(() => {
    getdata();
  }, [])

  const { emailType } = useParams();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <InputSearch />
        </div>

        <div className={styles.list}>
          {emails.map((item) => (
            <EmailLi emailType={emailType} emailId={item.emailId} name = {item.fullName} img={item.avatar} key={item} />
          ))}

        </div>
      </div>
      <Outlet />
    </>
  );
}
