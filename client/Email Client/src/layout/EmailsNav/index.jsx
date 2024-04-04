import styles from './style.module.css';
import EmailType from '../../components/EmailType';
import NewMsgBtn from '../../components/NewMsgBtn';
import { FaInbox } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";

export default function EmailsNav() {
  const icons = [
    { icon: <FaInbox />, name: 'Inbox' },
    { icon: <RiSendPlaneFill />, name: 'SentEmails' },
    { icon: <TiStarFullOutline />, name: 'Favourite' },
    { icon: <BsPencilFill />, name: 'Draft' },
    { icon: <MdDelete />, name: 'Deleted' }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.back}>
            <MdArrowBackIosNew />
          </div>
          <h1>Mailbox</h1>
        </div>
        <div className={styles.list}>
          <NewMsgBtn />
          {icons.map((item) => (

              <EmailType icon={item.icon} name={item.name} num={2} key={item.name} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}
