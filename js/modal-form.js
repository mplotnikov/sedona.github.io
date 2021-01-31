var link = document.querySelector(".search-title a");
var popup = document.querySelector(".search-form");
var arrival = document.querySelector("[name=arrival_date]");
link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.toggle("form-none");
    arrival.focus();
});