// Update Time Function
function updateTime() {
  const now = new Date();

  const options = { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  };
  
  const timeString = now.toLocaleTimeString([], options);
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000);
// updateTime();


// updated Time
function updateDate() {
    const now = new Date();
    
    const options = { 
        weekday: 'short', // "Sun"
        month: 'short',   // "Feb"
        day: 'numeric'    // "22"
    };

    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('clock').innerText = formattedDate;
}

// Call it immediately
const newDate = updateDate();