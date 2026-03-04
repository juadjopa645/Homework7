const name = "John Camargo";
let hasDownloadedResume = false;

console.log("Hello World!");

function showGreeting(name) {
return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

function daysUntilDeadline(deadline) {
const today = new Date();
const dueDate = new Date(deadline);
const difference = dueDate - today;
const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
return daysLeft;
}

document.addEventListener("DOMContentLoaded", function () {

document.getElementById("greeting").textContent = showGreeting(name);

const remainingDays = daysUntilDeadline("2026-12-15");
console.log("Days until project deadline:", remainingDays);

document.getElementById("resumeBtn").addEventListener("click", function () {
if (!hasDownloadedResume) {
alert("Your resume is downloaded successfully!");
hasDownloadedResume = true;
}
});

});