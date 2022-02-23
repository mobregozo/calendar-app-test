let events = [];

const showError = () => {
  alert("There is another event in that particular day");
};

const addEvents = (event) => {
  // Check if the event is coming from a day
  if (![...event.target.classList].includes("day")) return;
  const day = event.target.innerText;
  if (events.includes(day)) {
    showError();
    return;
  }
  events.push(day);
  event.target.classList.add("selected");
};

const createCalendar = () => {
  const calendarBox = document.querySelector("#calendar");
  calendarBox.addEventListener("click", addEvents);
  const node = document.createElement("div");
  node.classList.add("container");

  // get current Date
  const currentDate = new Date();

  // get number of days of the month as 0 is the last day of the previous month 
  const totalDaysOfTheMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  for (let day = 1; day <= totalDaysOfTheMonth; day++) {
    let newDay = document.createElement("div");
    newDay.innerHTML = `
        <div class="day" >    
            ${day} 
        </div>
    `;
    node.appendChild(newDay);
  }
  calendarBox.appendChild(node);
};

createCalendar();
