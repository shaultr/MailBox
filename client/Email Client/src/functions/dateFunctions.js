export const shortFormatDate= (inputDate)=> {
    // Calculate the time difference in milliseconds
    const currentTime = new Date();
    const timeDifference = currentTime - inputDate;
    
    // Define the threshold for "last 24 hours" (in milliseconds)
    const twentyFourHours = 24 * 60 * 60 * 1000;
    // Format the date based on the time difference
    let formattedDate;
    if (timeDifference >= twentyFourHours) {
      // Not within the last 24 hours
      formattedDate = inputDate.toLocaleDateString('il-GB', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
      });
    } else {
      // Within the last 24 hours
      formattedDate = inputDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    
    return formattedDate;
  }


  export const longFormatDate = (dateStr)=> {
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