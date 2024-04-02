import styles from './style.module.css';
import EmailType from '../EmailType';
import NewMsgBtn from '../NewMsgBtn';
import { FaInbox } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function NavLi() {
  const icons = [
    { icon: <FaInbox />, name: 'Inbox' },
    { icon: <RiSendPlaneFill />, name: 'Sent Emails' },
    { icon: <TiStarFullOutline />, name: 'Favourite' },
    { icon: <BsPencilFill />, name: 'Draft' },
    { icon: <MdDelete />, name: 'Deleted' }
  ];

  return (
    <div className={styles.container}>
      <h1>Mailbox</h1>
      <div className={styles.list}>

      <NewMsgBtn />
      {icons.map((item, index) => (
        <EmailType key={index} icon={item.icon} name={item.name} />
        ))}
        </div>
    </div>
  );
}
