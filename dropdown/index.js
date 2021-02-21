let visibility = false

function hideOptions(){
  if(document.getElementsByClassName("options")){
    document.getElementsByClassName("options")[0].style.display="none"
  }
}
function showOptions(){
  if(document.getElementsByClassName("options")){
    document.getElementsByClassName("options")[0].style.display="block"
  }
}

// hideOptions()



function select(item) {
  let obj = (document.getElementsByClassName("options")[0]).getElementsByTagName('li')[item]
  document.getElementById("dd-button").innerText = obj.innerText
  // hideOptions()
}


function assignFunction() {
  let obj = (document.getElementsByClassName("options")[0]).getElementsByTagName('li')
  let i = 0
  for (const item of obj) {
    item.setAttribute('onclick','select('+i+')')
    i=i+1
  }
}

function changeVisibility(){
  if(visibility){
    hideOptions()
  }else{
    showOptions()
  }
  visibility=!visibility
}


assignFunction()
document.addEventListener("click", (evt) => {
  const ddButton = document.getElementById("dd-button");
  let targetElement = evt.target; // clicked element

  do {
      if (targetElement == ddButton) {
        showOptions()
        return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
  } while (targetElement);

  hideOptions()
  
});