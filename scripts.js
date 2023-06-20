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
function get_sub_value() {
    subject = document.getElementById('text_select').value;
    if (subject == 'ENGLISH') {
        document.getElementById('text_select1').style.display = 'initial';
        document.getElementById('text_select2').style.display = 'none';
        document.getElementById('text_select3').style.display = 'none';
    }
    if (subject == 'SCIENCE') {
        document.getElementById('text_select2').style.display = 'initial';
        document.getElementById('text_select1').style.display = 'none';
        document.getElementById('text_select3').style.display = 'none';
    }
    if (subject == 'SOCIAL') {
        document.getElementById('text_select3').style.display = 'initial';
        document.getElementById('text_select1').style.display = 'none';
        document.getElementById('text_select2').style.display = 'none';
    }
    if (subject == 'MATHS') {
        document.getElementById('text_select2').style.display = 'none';
        document.getElementById('text_select1').style.display = 'none';
        document.getElementById('text_select3').style.display = 'none';
    }
    if (subject == 'TAMIL') {
        document.getElementById('text_select2').style.display = 'none';
        document.getElementById('text_select1').style.display = 'none';
        document.getElementById('text_select3').style.display = 'none';
    }
}