function loadup() {
    document.getElementById('body').style.marginLeft = "0px";
    document.getElementById('body').style.filter = "none";
}
setInterval(() => {
    let width_of_window = window.innerWidth;
    console.log(width_of_window);
    if (width_of_window < 518) {
        let d = document.getElementById('navbar');
        d.style.display = 'none';
        let n = document.getElementById('navbar1');
        n.style.display = 'initial';
    } else {
        let d = document.getElementById('navbar');
        d.style.display = 'initial';
        let n = document.getElementById('navbar1');
        n.style.display = 'none';
    }
}, 10);
const sideNavWidth = '250px';
let sideNav = document.getElementById('mySidenav');
function openNav() {
    sideNav.style.width = sideNavWidth;
    mainContent.style.marginLeft = sideNavWidth;
  }
  
  // Close the side navigation
  function closeNav() {
    sideNav.style.width = "0";
    mainContent.style.marginLeft = "0";
  }