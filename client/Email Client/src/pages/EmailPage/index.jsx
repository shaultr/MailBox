import EmailTitle from '../../components/EmailTitle';
import LabelBadge from '../../components/LabelBadge';
import MsgLi from '../../components/MsgLi';
import styles from './style.module.css';
import { TiStarFullOutline } from "react-icons/ti";
import { IoMdPrint } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EmailPage() {

  const { emailId } = useParams();

  const [details, setDetails] = useState({});

  const getdata = async () => {
    try {
      const { data } = await axios.get('/fakeData.json');
     const selectEmail =  data.users[0].emails.filter((item) => item.emailId === parseInt(emailId));
     setDetails(selectEmail[0]);
      return details
    }
    catch (err) {
      
    }
  };
  
  console.log(details);
  
  useEffect(() => {
    getdata();
  }, [])
  
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
        <EmailTitle title = {details.title}/>
      </div>
      <div className={styles.list}>
        <MsgLi />
        <MsgLi />
      </div>
      
    </div>
  );
}
