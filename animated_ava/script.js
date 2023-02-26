var html = document.getElementsByTagName("html")[0];
// var sun = document.getElementsByClassName('.fa-sun')[0];
// var moon = document.getElementsByClassName('.fa-moon')[0];
// // var toggle_back = document.getElementById('my-toggle');

// html.setAttribute("style", "color-scheme: dark");
// html.setAttribute("style", "transition: color-scheme 3s;");
    document.documentElement.style.setProperty("--text-color", "#cccccc");
    document.documentElement.style.setProperty("--bg-color", "#111111");


// function that changes html color scheme
function toggleColorScheme() {
  if (html.getAttribute("style") == "color-scheme: dark") {
    html.setAttribute("style", "color-scheme: light");
  } else {
    html.setAttribute("style", "color-scheme: dark");
  }
}

function toggleColorScheme2() {
  if (html.getAttribute("data-color-mode") === "dark") {
    html.setAttribute("data-color-mode", "light");
    html.style.setProperty("--bg-color", "#dddddd");
    html.style.setProperty("--text-color", "#111111");
  } else {
    html.setAttribute("data-color-mode", "dark");
    html.style.setProperty("--bg-color", "#111111");
    html.style.setProperty("--text-color", "#cccccc");
  }
}

// function that affects button css and switches toggle position back and forth
function toggleButton() {
    var toggle = document.getElementById("my-toggle");
    toggle.classList.toggle("on");
    toggle.classList.toggle("off");
    toggleColorScheme2();
    // finally we call the first function to actually toggle color scheme
}

