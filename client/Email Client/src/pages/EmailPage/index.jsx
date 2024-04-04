import EmailTitle from '../../components/EmailTitle';
import LabelBadge from '../../components/LabelBadge';
import MsgLi from '../../components/MsgLi';
import MsgAccordion from '../../components/MsgAccordion';
import SendBtn from '../../components/SendBtn';
import TextArea from '../../components/TextArea';
import styles from './style.module.css';
import { TiStarFullOutline } from "react-icons/ti";
import { IoMdPrint } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoPaperclip } from "react-icons/go";
import { FaImage } from "react-icons/fa";

export default function EmailPage() {

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <LabelBadge />
        <div className={styles.icons}>
          <button>
            <TiStarFullOutline />
          </button>

          <button>
            <IoMdPrint />
          </button>

          <button>
            <RiDeleteBin6Fill />
          </button>

          <button>
            <HiOutlineDotsVertical />
          </button>
        </div>

      </div>

      <div className={styles.title}>
        <EmailTitle />
      </div>
      <div className={styles.list}>
      <MsgLi />
      <MsgLi />
      <MsgLi />
      <MsgAccordion />
      <TextArea />
      </div>
      <div className={styles.footer}>
        <div className={styles.icons}>
        <button>
        <GoPaperclip />
          </button>
        <button>
      <FaImage />
          </button>
        </div>
      <SendBtn />
      </div>
    </div>
  );
}
