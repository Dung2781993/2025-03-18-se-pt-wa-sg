function greeting() {
  var name = document.getElementById('name').value;
  if (name !== "") {
    document.getElementById("greeting_message").innerHTML = "Hello " + name;
  }  
}

// Google Drive