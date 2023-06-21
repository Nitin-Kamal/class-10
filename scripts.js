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
    let subject = document.getElementById('text_select').value;
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
        document.getElementById('ch_select3').style.display = 'initial';
    }
    if (subject == 'TAMIL') {
        document.getElementById('text_select2').style.display = 'none';
        document.getElementById('text_select1').style.display = 'none';
        document.getElementById('text_select3').style.display = 'none';
    }
}
function get_book_value(select_book) {
    let book = document.getElementById(select_book).value;
    if (book == 'BEEHIVE') {
        document.getElementById('ch_select1').style.display = 'initial';
        document.getElementById('ch_select2').style.display = 'none';
        document.getElementById('ch_select3').style.display = 'none';
    } else {
        document.getElementById('ch_select2').style.display = 'initial';
        document.getElementById('ch_select1').style.display = 'none';
        document.getElementById('ch_select3').style.display = 'none';
    }
}
function get_ch_value(select_ch, select_path) {
    let chapter = document.getElementById(select_ch).value;
    let download_button = document.getElementById('download_text');
    if (chapter == 'CH1') {
        download_button.setAttribute("href", select_path + 'chapter_1.pdf');
    }
    if (chapter == 'CH2') {
        download_button.setAttribute("href", select_path + 'chapter_2.pdf');
    }
    if (chapter == 'CH3') {
        download_button.setAttribute("href", select_path + 'chapter_3.pdf');
    }
    if (chapter == 'CH4') {
        download_button.setAttribute("href", select_path + 'chapter_4.pdf');
    }
    if (chapter == 'CH5') {
        download_button.setAttribute("href", select_path + 'chapter_5.pdf');
    }
    if (chapter == 'CH6') {
        download_button.setAttribute("href", select_path + 'chapter_6.pdf');
    }
    if (chapter == 'CH7') {
        download_button.setAttribute("href", select_path + 'chapter_7.pdf');
    }
    if (chapter == 'CH8') {
        download_button.setAttribute("href", select_path + 'chapter_8.pdf');
    }
    if (chapter == 'CH9') {
        download_button.setAttribute("href", select_path + 'chapter_9.pdf');
    }
    if (chapter == 'CH10') {
        download_button.setAttribute("href", select_path + 'chapter_10.pdf');
    }
    if (chapter == 'CH11') {
        download_button.setAttribute("href", select_path + 'chapter_11.pdf');
    }
    if (chapter == 'CH12') {
        download_button.setAttribute("href", select_path + 'chapter_12.pdf');
    }
    if (chapter == 'ANSWERS') {
        download_button.setAttribute("href", select_path + 'Answers.pdf');
    }
}
