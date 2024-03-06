document.querySelector(".login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
  var url = "http://localhost:8080/login"; // Set the API endpoint URL you want to call
  xhr.withCredentials = true;
  xhr.open("POST", url, true); // Initialize a request with the "POST" method and make it asynchronous

  xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var userName = document.querySelector("#username").value;
      alert(userName);
      window.location.href = "productRecommendation.html?username=" + userName;
    }
  };

  var formData = {
    userName: document.getElementById("username").value,
    password: document.getElementById("password").value,
  }; // Collect form data
  xhr.send(JSON.stringify(formData)); // Send the request with the form data as a JSON string
});
