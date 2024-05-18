var errorMiles = document.getElementById("errorMiles");
errorMiles.style.display = "none"; 

function checkInput(){
  var inputBox = document.getElementById("numMiles");
  var milesSubmit = document.getElementById("milesSubmit");

  if (inputBox.value <= 0) {
    errorMiles.style.display = "inline";
    return false; 
  } 
  else {
    inputBox.disabled = true;
    errorMiles.style.display = "none";
    milesSubmit.style.display = "none"; 
    return true; 
  }
}

