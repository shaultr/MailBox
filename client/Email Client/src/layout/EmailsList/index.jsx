import styles from './style.module.css';
import EmailLi from '../../components/EmailLi'
import InputSearch from '../../components/InputSearch'
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function EmailsList() {

  const { emailType } = useParams();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
        <InputSearch />
        </div>
        <div className={styles.list}>
          <EmailLi emailType={emailType}/>
        </div>
      </div>
      <Outlet />
    </>
  );
}
