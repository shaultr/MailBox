import styles from './style.module.css'
export default function EmailTitle({title, date}) {
  function formatDate(dateStr) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const daySuffixes = ["th", "st", "nd", "rd"];
  
    const date = new Date(dateStr);
    const today = new Date();
  
    // Check if the given date is today
    const isToday = date.getDate() === today.getDate() && 
                    date.getMonth() === today.getMonth() && 
                    date.getFullYear() === today.getFullYear();
  
    // Day with suffix
    const day = date.getDate();
    const daySuffix = (day % 10 < 4 && (day < 11 || day > 13)) ? daySuffixes[day % 10] : daySuffixes[0];
  
    // Time formatting
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    // Final formatting
    const formattedDate = `${isToday ? "Today" : day + daySuffix + " " + monthNames[date.getMonth()]} ${date.getFullYear()}, ${hours}:${minutes}`;
  
    return formattedDate;
  }
 let dateTitle =  formatDate(date)
  return (
    <div className={styles.container}>

      <div className={styles.date}>
        {dateTitle}
      </div>
      <div className={styles.title}>
      {title}
      </div>
    </div>
  )
}
