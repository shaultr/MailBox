import EmailTitle from '../../components/EmailTitle';
import LabelBadge from '../../components/LabelBadge';
import MsgLi from '../../components/MsgLi';
import styles from './style.module.css';
import { TiStarFullOutline } from "react-icons/ti";
import { IoMdPrint } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { axiosReq } from '../../functions/axiosReq';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EmailPage() {

  const { emailId } = useParams();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState({});
  const [messages, setMessages] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axiosReq({ method: 'GET', url: `/chat/emailById/${emailId}` });
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

    useEffect(() => {
    fetchData()
    .then(e => {
       setTitle(e.subject);
       setMessages(e.msg);
    }).catch(error => {
      console.error(error);
    });
  }, []);

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
        <EmailTitle title={title} />
      </div>
      <div className={styles.list}>
        {JSON.stringify(messages)}
        <MsgLi fullName={details.fullName} msg={details.msg} />
      </div>

    </div>
  );
}
