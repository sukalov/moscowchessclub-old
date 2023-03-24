var html = document.getElementsByTagName("html")[0];
var moveW = document.getElementById('moveW');
var moveB = document.getElementById('moveB');
// var sun = document.getElementsByClassName('.fa-sun')[0];
// var moon = document.getElementsByClassName('.fa-moon')[0];
// // var toggle_back = document.getElementById('my-toggle');

// html.setAttribute("style", "color-scheme: dark");
// html.setAttribute("style", "transition: color-scheme 3s;");
    html.style.setProperty("--text-color", "#cccccc");
    html.style.setProperty("--bg-color", "#111111");
    // moveW.style.setProperty("--bg-color", "#dddddd");
    // moveW.style.setProperty("--text-color", "#111111");
    // moveB.style.setProperty("--bg-color", "#dddddd");
    // moveB.style.setProperty("--text-color", "#111111");

// function that changes html color scheme
function toggleColorScheme() {
  if (html.getAttribute("style") == "color-scheme: dark") {
    html.setAttribute("style", "color-scheme: light");
  } else {
    html.setAttribute("style", "color-scheme: dark");
  }
}
// function that changes html color scheme manually by switching colors
function toggleColorScheme2() {
  if (html.getAttribute("data-color-mode") === "dark") {
    html.setAttribute("data-color-mode", "light");
    html.style.setProperty("--bg-color", "#dddddd");
    html.style.setProperty("--text-color", "#111111");

    // moveW.style.setProperty("--bg-color", "#111111");
    // moveW.style.setProperty("--text-color", "#cccccc");
    // moveB.style.setProperty("--bg-color", "#111111");
    // moveB.style.setProperty("--text-color", "#cccccc");
  } else {
    html.setAttribute("data-color-mode", "dark");
    html.style.setProperty("--bg-color", "#111111");
    html.style.setProperty("--text-color", "#cccccc");
    
    // moveW.style.setProperty("--bg-color", "#dddddd");
    // moveW.style.setProperty("--text-color", "#111111");
    // moveB.style.setProperty("--bg-color", "#dddddd");
    // moveB.style.setProperty("--text-color", "#111111");
  }
}

const div = document.querySelector('div');

div.addEventListener('touchstart', function(event) {
  event.preventDefault();
});

// function that affects button css and switches toggle position back and forth
function toggleButton() {
    var toggle = document.getElementById("my-toggle");
    toggle.classList.toggle("on");
    toggle.classList.toggle("off");
    toggleColorScheme2();
    // finally we call the first function to actually toggle color scheme
}

// function adding event listeners to make hover effect only while touching on mobile devices
function touchHandle(el) {
  el.classList.toggle("touched");
}

const els = document.getElementsByClassName('person__container');
Array.prototype.forEach.call(els, el => {
    el.addEventListener('touchstart', function() {touchHandle(el)});
    el.addEventListener('touchend', function() {touchHandle(el)});
});
