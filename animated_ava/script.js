var html = document.getElementsByTagName("html")[0];
// var sun = document.getElementsByClassName('.fa-sun')[0];
// var moon = document.getElementsByClassName('.fa-moon')[0];
// // var toggle_back = document.getElementById('my-toggle');

html.setAttribute("style", "color-scheme: dark");


// function that changes html color scheme
function toggleColorScheme() {
  if (html.getAttribute("style") == "color-scheme: dark") {
    html.setAttribute("style", "color-scheme: light");
    toggle_back.style.backgroundColor = "#272737";
  } else {
    html.setAttribute("style", "color-scheme: dark");
    toggle_back.style.backgroundColor = "#ccc";
    
  }
}

// function that affects button css and switches toggle position back and forth
function toggleButton() {
    var toggle = document.getElementById("my-toggle");
    toggle.classList.toggle("on");
    toggle.classList.toggle("off");
    toggleColorScheme();
    // finally we call the first function to actually toggle color scheme
}