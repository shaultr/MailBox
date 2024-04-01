import styles from './style.module.css';
import MainIcon from '../MainIcon';
import { RxTimer } from "react-icons/rx";
import { FaCalendarCheck } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoVideocam } from "react-icons/io5";

export default function EmailList() {
  const icons = [
    <RxTimer />,
    <FaCalendarCheck />,
    <IoMdEye />,
    <MdPeople />,
    <VscGraph />,
    <IoVideocam />
  ];

  return (
    <div className={styles.container}>
      {icons.map((item, index) => (
        <MainIcon key={index} icon={item} />
      ))}
    </div>
  );
}
