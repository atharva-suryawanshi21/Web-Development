alert("Successfully Linked JS");

document.getElementById("result").innerText = "";
document.getElementById("result2").innerText = "";
document.getElementById("result3").innerText = "";

const avg_lifespan = 70;
const week_in_year = 52;

const total_weeks = avg_lifespan * week_in_year;

const curr_hour = new Date().getHours();

function msg(hour) {
  if (hour >= 5 && hour < 12) return "Good Morning";
  else {
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    else return "Good Night";
  }
}

document.getElementById("result").innerText =
  "Total number of week in human life span is " + total_weeks;

document.getElementById("result2").innerText = "Cuurent hours is " + curr_hour;

document.getElementById("result3").innerText = "Message is " + msg(curr_hour);
