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
import TextEditor from '../../components/TextEditor';

export default function EmailPage() {

  const { emailId } = useParams();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
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
      console.log(e.msg[0].date);
       setDate(e.lastDate)
    }).catch(error => {
      console.error(error);
    });
  }, [emailId]);
  
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <LabelBadge
        color={"rgba(253, 94, 94, 1)"}
        whideRec={"128px"}
        heightRec={"42px"}
        whideSqu={"32.5px"}
        heightSqu={"32.5px"}
        
        />
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
        <EmailTitle title={title} date = {date}/>
      </div>
      <div className={styles.list}>
 
      {messages.map((item, index) => (
                    <MsgLi id={item.from._id} name={item.from.fullName} avatar = {item.from.avatar} msg={item.content} date={item.date} key={index}/>

          ))}
      </div>
      <TextEditor />

    </div>
  );
}
