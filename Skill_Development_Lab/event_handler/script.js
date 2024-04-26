var popup = document.getElementById("notification_container");
var close_popup = document.getElementById("close_notification");
var show_popup = document.getElementById("show_notification");

popup.style.display = "none";

function show_popup_func() {
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 5000);
}

function close_popup_func() {
  popup.style.display = "none";
}

show_popup.addEventListener("click", show_popup_func);
close_popup.addEventListener("click", close_popup_func);
