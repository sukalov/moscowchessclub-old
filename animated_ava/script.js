var html = document.getElementsByTagName("html")[0];
// var sun = document.getElementsByClassName('.fa-sun')[0];
// var moon = document.getElementsByClassName('.fa-moon')[0];
// // var toggle_back = document.getElementById('my-toggle');

// html.setAttribute("style", "color-scheme: dark");
// html.setAttribute("style", "transition: color-scheme 3s;");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--bg-color", "#111111");


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

function toggleColorScheme2() {
  var htmlTag = document.getElementsByTagName("html")[0];
  if (htmlTag.getAttribute("data-color-mode") === "dark") {
    htmlTag.setAttribute("data-color-mode", "light");
    document.documentElement.style.setProperty("--bg-color", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#111111");
  } else {
    htmlTag.setAttribute("data-color-mode", "dark");
    document.documentElement.style.setProperty("--bg-color", "#111111");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
  }
  document.documentElement.style.transition = "background-color var(--color-scheme-change) ease-in-out, var(--color-scheme-change) ease-in-out";
}

// function that affects button css and switches toggle position back and forth
function toggleButton() {
    var toggle = document.getElementById("my-toggle");
    toggle.classList.toggle("on");
    toggle.classList.toggle("off");
    toggleColorScheme2();
    // finally we call the first function to actually toggle color scheme
}

