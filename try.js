var inputBox = document.getElementById("numMiles");
document.getElementById("errorMiles").style.display = "none";
function checkInput(){
  if (inputBox.value < 0){
     document.getElementById("errorMiles").style.display = "inline";
      return false;
  }
  else{
    document.getElementById("numMiles").disabled = true;
    document.getElementById("numMiles").text = inputBox.value;
     document.getElementById("errorMiles").style.display = "none";
    document.getElementById("milesSubmit").style.display = "none";
      return true;
  }
}

