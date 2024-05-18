function checkInput(){
  var inputBox = document.getElementById("numMiles");
  var errorMiles = document.getElementById("errorMiles");
  var milesSubmit = document.getElementById("milesSubmit");

  errorMiles.style.display = "none"; 

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

