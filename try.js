var inputBox = document.getElementById("numMiles");

function checkInput(){
  if (inputBox.value < 0){
     document.getElementById("errorMiles").style.display = "inline";
      return false;
  }
  else{
     document.getElementById("errorMiles").style.display = "none";
      return true;
  }
}

