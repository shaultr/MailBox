import styles from './style.module.css';
import EmailType from '../../components/EmailType';
import NewMsgBtn from '../../components/NewMsgBtn';
import DropDown from '../../components/DropDown';
import LabelBadge from '../../components/LabelBadge';
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useState } from 'react';
import { FaInbox } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { axiosReq } from '../../functions/axiosReq';
import { useEffect } from 'react';

export default function EmailsNav() {
  const navigate = useNavigate();

  const [numOfNotRead, setNumOfNotRead] = useState(0);

  const fetchData = async () => {
    try {
      const num = await axiosReq({ method: 'GET', url: '/chat' });
      console.log(num.result);
      return num?.result?.numOfNewChats;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    fetchData().then(n => {
      setNumOfNotRead(n);
    }).catch(error => {
      console.error(error);
    });
  }, []);


  const icons = [
    { icon: <RiSendPlaneFill />, name: 'Sent Emails', to: 'sent' },
    { icon: <TiStarFullOutline />, name: 'Favorite', to: 'favorite' },
    { icon: <BsPencilFill />, name: 'Draft', to: 'draft' },
    { icon: <MdDelete />, name: 'Deleted', to: 'deleted' }
  ];

  const labels = [
    { text: 'Work', color: '#B3BDCC' },
    { text: 'Work in progress', color: '#FD5E5E' },
    { text: 'Promissing offers', color: '#FFD700' },
    { text: 'Work in progress', color: ' #FF6347' },
    { text: 'In acceptance', color: '#FFA07A' },
    { text: 'Read Later', color: '#6495ED' },
  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.back} onClick={() => navigate(-1)}>
          <button>
            <MdArrowBackIosNew />
          </button>
          </div>
          <h1>Mailbox</h1>
        </div>
        <div className={styles.list}>
          <NewMsgBtn />
          <EmailType icon={<FaInbox />} to={"inbox"} name={'Inbox'} num={numOfNotRead} />
          {icons.map((item) => (

            <EmailType icon={item.icon} name={item.name} to={item.to} key={item.name} />
          ))}
          <DropDown icon={<MdOutlineExpandMore />} name={"More"} />
          <div className={styles.labels}>
            <div className={styles.titleLabels}>

              <p>Labeks</p>
              <div className={styles.iconLabels}>

              <div className={styles.plus}>+</div>
              <button>
              <HiOutlineDotsVertical />
              </button>
              </div>
            </div>
            {labels.map((item, index) => (
              <div className={styles.label} key={index}>
                <LabelBadge
                  color={item.color}
                  whideRec={"70px"}
                  heightRec={"30px"}
                  whideSqu={"26px"}
                  heightSqu={"26px"}
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}