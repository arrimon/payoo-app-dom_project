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
updateTime();