document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const userName = params.get("username");
  const productId = params.get("product_id"); // Assuming the parameter name is 'ID'
  console.log("username", userName);
  var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
  var url = "http://localhost:8080/products?product_id=" + productId; // Set the API endpoint URL you want to call
  xhr.open("GET", url, true); // Initialize a request with the "POST" method and make it asynchronous

  xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      //alert(JSON.stringify(xhr.responseText));
      product = JSON.parse(xhr.responseText);
      document.querySelector(".product-image").innerHTML =
        "<img src=" + product.image + " alt=" + product.productName + " />";
      document.querySelector(".product").innerHTML = product.productName;
      document.querySelector(".price").innerHTML =
        "$" + product.price.toFixed(2);
      document.querySelector(".category").innerHTML = product.category;
      document.querySelector(".description").innerHTML = product.description;
    }
  };

  xhr.send(); // Send the request with the form data as a JSON string

  document
    .querySelector(".add-to-cart-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
      var url = "http://localhost:8080/cart"; // Set the API endpoint URL you want to call
      xhr.withCredentials = true;
      xhr.open("POST", url, true); // Initialize a request with the "POST" method and make it asynchronous

      xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          alert(xhr.responseText);
        }
      };

      var formData = {
        userName: userName,
        method: "add",
        productId: product.productId,
        quantity: document.querySelector(".quantity").value,
      };

      xhr.send(JSON.stringify(formData), 5000);
    });

  document.querySelector(".cart").addEventListener("click", function (e) {
    e.preventDefault();

    console.log(userName);
    window.open("shoppingCart.html?username=" + userName, "_blank");
  });
});
