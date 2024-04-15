import styles from './style.module.css';
import EmailLi from '../../components/EmailLi'
import InputSearch from '../../components/InputSearch'
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosReq } from '../../functions/axiosReq';

export default function EmailsList() {
  const { emailType } = useParams();

  const [emails, setEmails] = useState([])

  const fetchData = async () => {
    try {
      const res = await axiosReq({ method: 'GET', url: `/chat/${emailType}` });
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

    useEffect(() => {
    fetchData().then(e => {
      setEmails(e);
    }).catch(error => {
      console.error(error);
    });
  }, [emailType]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <InputSearch />
        </div>

        <div className={styles.list}>
          {emails.map((item, index) => (
            <EmailLi emailId={item.chat._id} content = {item.chat.msg[0].content} members={item.chat.members} date = {item.chat.lastDate} key={index} />
          ))}

        </div>
      </div>
      <Outlet />
    </>
  );
}
