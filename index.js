// add task button
const OpenTaskBtn = document.getElementById("task-btn");
const closeTaskBtn = document.getElementById("cancel-btn");
const SaveBtn = document.getElementById("save-btn");
const userForm = document.getElementById("form");
const currentDay = document.getElementById("current-day");
const currentYr = document.getElementById("current-year");
const newDate = document.getElementById("date");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const cancelBtn = document.getElementById("cancel");
const discardBtn = document.getElementById("discard-btn");
//const tickBoxes = document.querySelectorAll('input[type="checkbox"]');
//const userTaskInput = document.getElementById("user-task-input");
const taskContainers = document.querySelectorAll(".task-cont");
const taskDataArray = [];

OpenTaskBtn.addEventListener("click", () => {
  userForm.classList.toggle("hidden");
});

const date = new Date();

const dayOfWeek = date.getDay();
const year = date.getFullYear();
const currentDate = date.getDate();
const monthsOfYear = date.getMonth();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = days[dayOfWeek];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthName = months[monthsOfYear];

currentDay.textContent = dayName;
newDate.textContent = currentDate;
currentYr.textContent = `${monthName} , ${year}`;

closeTaskBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  userForm.classList.toggle("hidden");
});

userForm.addEventListener("submit", (e) => {
  preventDefault();
});

taskContainers.forEach((container) => {
  const checkbox = container.querySelector('input[type="checkbox"]');
  const userInput = container.querySelector(".user-task-input");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      userInput.style.textDecoration = "line-through";
    } else {
      userInput.style.textDecoration = "none";
    }
  });
});
