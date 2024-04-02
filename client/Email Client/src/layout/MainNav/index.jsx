import styles from './style.module.css';
import MainIcon from '../../components/MainIcon';
import { RxTimer } from "react-icons/rx";
import { FaCalendarCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoVideocam } from "react-icons/io5";

export default function EmailList() {
  const icons = [
    { icon: <RxTimer />, title: 'RxTimer' },
    { icon: <FaCalendarCheck /> },
    { icon: <IoMdEye /> },
    { icon: <MdPeople /> },
    { icon: <VscGraph /> },
    { icon: <IoVideocam /> }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src='logo-mail-box.png' width={"30px"} />
      </div>

      <div className={styles.icons}>

        {icons.map((item, index) => (
          <MainIcon key={index} icon={item.icon} title={item.title} />
        ))}

      </div>


      <div className={styles.image}>
        <div className={styles.circle}>
          <img src='./images/1.webp' alt='' />
        </div>
      </div>
    </div>
  );
}
