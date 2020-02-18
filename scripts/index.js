
  var droppers = document.querySelectorAll(".droppers dt");
  var xIcons = document.querySelectorAll(".droppers .x-icon");
  var dropContents = document.querySelectorAll(".droppers dd");
  for(var i = 0; i < droppers.length; i++) {
    droppers[i].setAttribute("onclick","dropDown(" + i + ",this);");
    xIcons[i].setAttribute("onclick","dropDown(" + i + ",this.parentElement.previousSibling.previousSibling);");
  }

function dropDown(value,dataTitle) {
  dropContents[value].classList.toggle("open");
  dataTitle.classList.toggle("selected");
}

function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence;
}

function loadModal(contentTitle,modalTitle) {
  document.getElementById("mainTitle").innerHTML = modalTitle;
  var modalBox = document.querySelector("#mainModal div.modal-body");
  //modalBody.setAttribute("w3-include-html","content/" + htmlPageTitle + ".html");
  //includeHTML();
  var content = document.getElementById(contentTitle + "_content").innerHTML;
  modalBox.innerHTML = content;
}

function setActive(selected) {
  document.querySelector(".active").classList.remove("active");
  selected.classList.add("active");
}
