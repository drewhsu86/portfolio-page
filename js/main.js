// set a variable that can be toggled
// and sets the visibility of the nav buttons 
// the toggle button won't be visible in 
// the largest view media query 
let showMenu = true 
const navBtns = document.querySelector('nav') 
const navToggle = document.querySelector('.navToggle')

navToggle.addEventListener('click', () => {
  if (showMenu) {
    // if showMenu is true, hide navBtns 
    // change showMenu to false 
    // change innerHTML of navToggle 
    navBtns.style.display = "none"
    navToggle.innerHTML = "&nbsp; Show Menu"
    showMenu = false 
  } else {
    // if showMenu is false, show navBtns 
    navBtns.style.display = "flex"
    navToggle.innerHTML = "&nbsp; Hide Menu"
    showMenu = true 
  }
})