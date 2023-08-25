function loadup() {
  document.getElementById("body").style.marginLeft = "0px";
  document.getElementById("body").style.filter = "none";
}
setInterval(() => {
  let width_of_window = window.innerWidth;
  if (width_of_window < 550) {
    let d = document.getElementById("navbar");
    d.style.display = "none";
    let n = document.getElementById("navbar1");
    n.style.display = "initial";
  } else {
    let d = document.getElementById("navbar");
    d.style.display = "initial";
    let n = document.getElementById("navbar1");
    n.style.display = "none";
  }
}, 10);
const sideNavWidth = "250px";
let sideNav = document.getElementById("mySidenav");
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
  let subject = document.getElementById("text_select").value;
  if (subject == "ENGLISH") {
    document.getElementById("text_select1").style.display = "initial";
    document.getElementById("text_select2").style.display = "none";
    document.getElementById("text_select3").style.display = "none";
  }
  if (subject == "SCIENCE") {
    document.getElementById("text_select2").style.display = "initial";
    document.getElementById("text_select1").style.display = "none";
    document.getElementById("text_select3").style.display = "none";
  }
  if (subject == "SOCIAL") {
    document.getElementById("text_select3").style.display = "initial";
    document.getElementById("text_select1").style.display = "none";
    document.getElementById("text_select2").style.display = "none";
  }
  if (subject == "MATHS") {
    document.getElementById("text_select2").style.display = "none";
    document.getElementById("text_select1").style.display = "none";
    document.getElementById("text_select3").style.display = "none";
    document.getElementById("ch_select3").style.display = "initial";
  }
  if (subject == "TAMIL") {
    document.getElementById("text_select2").style.display = "none";
    document.getElementById("text_select1").style.display = "none";
    document.getElementById("text_select3").style.display = "none";
    document.getElementById("ch_select12").style.display = "initial";
  }
}
function get_book_value(select_book) {
  let book = document.getElementById(select_book).value;
  if (book == "BEEHIVE") {
    document.getElementById("ch_select1").style.display = "initial";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "MOMENTS") {
    document.getElementById("ch_select2").style.display = "initial";
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "HISTORY") {
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "inital";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "CIVICS") {
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "initial";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "GEOGRAPHY") {
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "initial";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "ECONOMICS") {
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "initial";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "BIOLOGY") {
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "initial";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "CHEMISTRY") {
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "initial";
    document.getElementById("ch_select11").style.display = "none";
    document.getElementById("ch_select12").style.display = "none";
  }
  if (book == "PHYSICS") {
    document.getElementById("ch_select1").style.display = "none";
    document.getElementById("ch_select2").style.display = "none";
    document.getElementById("ch_select3").style.display = "none";
    document.getElementById("ch_select4").style.display = "none";
    document.getElementById("ch_select5").style.display = "none";
    document.getElementById("ch_select6").style.display = "none";
    document.getElementById("ch_select7").style.display = "none";
    document.getElementById("ch_select8").style.display = "none";
    document.getElementById("ch_select9").style.display = "none";
    document.getElementById("ch_select10").style.display = "none";
    document.getElementById("ch_select11").style.display = "initial";
    document.getElementById("ch_select12").style.display = "none";
  }
}
function get_ch_value(select_ch, select_path) {
  let chapter = document.getElementById(select_ch).value;
  let download_button = document.getElementById("download_text");
  if (chapter == "CH1") {
    download_button.setAttribute("href", select_path + "chapter_1.pdf");
  }
  if (chapter == "CH2") {
    download_button.setAttribute("href", select_path + "chapter_2.pdf");
  }
  if (chapter == "CH3") {
    download_button.setAttribute("href", select_path + "chapter_3.pdf");
  }
  if (chapter == "CH4") {
    download_button.setAttribute("href", select_path + "chapter_4.pdf");
  }
  if (chapter == "CH5") {
    download_button.setAttribute("href", select_path + "chapter_5.pdf");
  }
  if (chapter == "CH6") {
    download_button.setAttribute("href", select_path + "chapter_6.pdf");
  }
  if (chapter == "CH7") {
    download_button.setAttribute("href", select_path + "chapter_7.pdf");
  }
  if (chapter == "CH8") {
    download_button.setAttribute("href", select_path + "chapter_8.pdf");
  }
  if (chapter == "CH9") {
    download_button.setAttribute("href", select_path + "chapter_9.pdf");
  }
  if (chapter == "CH10") {
    download_button.setAttribute("href", select_path + "chapter_10.pdf");
  }
  if (chapter == "CH11") {
    download_button.setAttribute("href", select_path + "chapter_11.pdf");
  }
  if (chapter == "CH12") {
    download_button.setAttribute("href", select_path + "chapter_12.pdf");
  }
  if (chapter == "ANSWERS") {
    download_button.setAttribute("href", select_path + "Answers.pdf");
  }
  if (chapter == "BOOK") {
    download_button.setAttribute("href", select_path + "textbook.pdf");
  }
}
function get_sub_value1() {
  let subject = document.getElementById("sub_select").value;
  if (subject == "ENGLISH") {
    document.getElementById("sub_select1").style.display = "initial";
    document.getElementById("sub_select2").style.display = "none";
    document.getElementById("sub_select3").style.display = "none";
  }
  if (subject == "SCIENCE") {
    document.getElementById("sub_select2").style.display = "initial";
    document.getElementById("sub_select1").style.display = "none";
    document.getElementById("sub_select3").style.display = "none";
  }
  if (subject == "SOCIAL") {
    document.getElementById("sub_select3").style.display = "initial";
    document.getElementById("sub_select1").style.display = "none";
    document.getElementById("sub_select2").style.display = "none";
  }
  if (subject == "MATHS") {
    document.getElementById("sub_select2").style.display = "none";
    document.getElementById("sub_select1").style.display = "none";
    document.getElementById("sub_select3").style.display = "none";
    document.getElementById("ch_select3").style.display = "initial";
  }
  if (subject == "TAMIL") {
    document.getElementById("sub_select2").style.display = "none";
    document.getElementById("sub_select1").style.display = "none";
    document.getElementById("sub_select3").style.display = "none";
    document.getElementById("ch_select_notes4").style.display = "initial";
  }
}
function get_book_value1(select_book) {
  let book = document.getElementById(select_book).value;
  if (book == "BEEHIVE") {
    document.getElementById("ch_select_notes1").style.display = "initial";
    document.getElementById("ch_select_notes2").style.display = "none";
    document.getElementById("ch_select_notes3").style.display = "none";
    document.getElementById("ch_select_notes4").style.display = "none";
    document.getElementById("ch_select_notes5").style.display = "none";
    document.getElementById("ch_select_notes6").style.display = "none";
    document.getElementById("ch_select_notes7").style.display = "none";
  }
  if (book == "MOMENTS") {
    document.getElementById("ch_select_notes2").style.display = "initial";
    document.getElementById("ch_select_notes1").style.display = "none";
    document.getElementById("ch_select_notes3").style.display = "none";
    document.getElementById("ch_select_notes4").style.display = "none";
    document.getElementById("ch_select_notes5").style.display = "none";
    document.getElementById("ch_select_notes6").style.display = "none";
    document.getElementById("ch_select_notes7").style.display = "none";
  }
  if (book == "BIOLOGY") {
    document.getElementById("ch_select_notes2").style.display = "none";
    document.getElementById("ch_select_notes1").style.display = "none";
    document.getElementById("ch_select_notes3").style.display = "none";
    document.getElementById("ch_select_notes4").style.display = "none";
    document.getElementById("ch_select_notes5").style.display = "initial";
    document.getElementById("ch_select_notes6").style.display = "none";
    document.getElementById("ch_select_notes7").style.display = "none";
  }
  if (book == "CHEMISTRY") {
    document.getElementById("ch_select_notes2").style.display = "none";
    document.getElementById("ch_select_notes1").style.display = "none";
    document.getElementById("ch_select_notes3").style.display = "none";
    document.getElementById("ch_select_notes4").style.display = "none";
    document.getElementById("ch_select_notes5").style.display = "none";
    document.getElementById("ch_select_notes6").style.display = "initial";
    document.getElementById("ch_select_notes7").style.display = "none";
  }
  if (book == "PHYSICS") {
    document.getElementById("ch_select_notes2").style.display = "none";
    document.getElementById("ch_select_notes1").style.display = "none";
    document.getElementById("ch_select_notes3").style.display = "none";
    document.getElementById("ch_select_notes4").style.display = "none";
    document.getElementById("ch_select_notes5").style.display = "none";
    document.getElementById("ch_select_notes6").style.display = "none";
    document.getElementById("ch_select_notes7").style.display = "initial";
  }
}
function get_ch_value1(select_ch, select_path) {
  let chapter = document.getElementById(select_ch).value;
  let download_button = document.getElementById("download_text");
  if (chapter == "CH1") {
    download_button.setAttribute("href", select_path + "chapter_1.pdf");
  }
  if (chapter == "CH2") {
    download_button.setAttribute("href", select_path + "chapter_2.pdf");
  }
  if (chapter == "CH3") {
    download_button.setAttribute("href", select_path + "chapter_3.pdf");
  }
  if (chapter == "CH4") {
    download_button.setAttribute("href", select_path + "chapter_4.pdf");
  }
  if (chapter == "CH5") {
    download_button.setAttribute("href", select_path + "chapter_5.pdf");
  }
  if (chapter == "CH6") {
    download_button.setAttribute("href", select_path + "chapter_6.pdf");
  }
  if (chapter == "CH7") {
    download_button.setAttribute("href", select_path + "chapter_7.pdf");
  }
  if (chapter == "CH8") {
    download_button.setAttribute("href", select_path + "chapter_8.pdf");
  }
  if (chapter == "CH9") {
    download_button.setAttribute("href", select_path + "chapter_9.pdf");
  }
  if (chapter == "CH10") {
    download_button.setAttribute("href", select_path + "chapter_10.pdf");
  }
  if (chapter == "CH11") {
    download_button.setAttribute("href", select_path + "chapter_11.pdf");
  }
  if (chapter == "CH12") {
    download_button.setAttribute("href", select_path + "chapter_12.pdf");
  }
}
