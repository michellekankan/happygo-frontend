document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const userName = params.get("username");
  var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
  var url = "http://localhost:8080/users/" + userName + "/profile"; // Set the API endpoint URL you want to call
  xhr.open("GET", url, true); // Initialize a request with the "POST" method and make it asynchronous

  xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      //alert(JSON.stringify(xhr.responseText));
      userProfile = JSON.parse(xhr.responseText);
      document.querySelector(".username").innerHTML = userProfile.userName;
      document.querySelector(".age").innerHTML = "Age: " + userProfile.age;
      document.querySelector(".phoneNumber").innerHTML =
        "Phone Number: " + userProfile.phoneNumber;
      document.querySelector(".email").innerHTML =
        "Email: " + userProfile.email;
      document.querySelector(".address").innerHTML =
        "Address: " + userProfile.address;
      document.querySelector(".preferredCategory").innerHTML =
        "Preferred Category: " + userProfile.preferredCategory;
    }
  };

  xhr.send(); // Send the request with the form data as a JSON string
});
