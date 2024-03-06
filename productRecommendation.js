document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search); //剛加的
  const userName = params.get("username");
  var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
  //var url = "http://localhost:8080/products/recommendation"; // Set the API endpoint URL you want to call
  xhr.withCredentials = true;
  var url =
    "http://localhost:8080/products/recommendation?username=" + userName;
  //var url = "http://localhost:8080/products/michelle/recommendation"; // Set the API endpoint URL you want to call
  xhr.open("GET", url, true); // Initialize a request with the "POST" method and make it asynchronous

  xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      //alert(JSON.stringify(xhr.responseText));
      products = JSON.parse(xhr.responseText);
      console.log(products);
      var str = "";
      products.forEach((product) => {
        str += `<div class="product">
        <img src=${product.image} alt=${product.productName} />
        <h3>${product.productName}</h3>
        <p>$${product.price}</p>
        <p>${product.category}</p>
        <p>${product.description}</p>
        <button class="detail-button" data-product-id=${product.productId}>Details</button>
      </div>`;
      });
      document.querySelector(".product-container").innerHTML = str;
    }
  };

  xhr.send(); // Send the request with the form data as a JSON string

  document.querySelector(".home").addEventListener("click", function () {
    e.preventDefault();
    var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
    var url = "http://localhost:8080/products/category/home"; // Set the API endpoint URL you want to call
    xhr.open("GET", url, true); // Initialize a request with the "POST" method and make it asynchronous

    xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //alert(JSON.stringify(xhr.responseText));
        products = JSON.parse(xhr.responseText);
        console.log(products);
        var str = "";
        products.forEach((product) => {
          str += `<div class="product">
          <img src=${product.image} alt=${product.productName} />
          <h3>${product.productName}</h3>
          <p>$${product.price}</p>
          <p>${product.category}</p>
          <p>${product.description}</p>
          <button>Add to Cart</button>
        </div>`;
        });
        document.querySelector(".product-container").innerHTML = str;
      }
    };

    xhr.send(); // Send the request with the form data as a JSON string
  });

  document.querySelector(".electronics").addEventListener("click", function () {
    e.preventDefault();
    var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
    var url = "http://localhost:8080/products/category/electronics"; // Set the API endpoint URL you want to call
    xhr.open("GET", url, true); // Initialize a request with the "POST" method and make it asynchronous

    xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //alert(JSON.stringify(xhr.responseText));
        products = JSON.parse(xhr.responseText);
        console.log(products);
        var str = "";
        products.forEach((product) => {
          str += `<div class="product">
          <img src=${product.image} alt=${product.productName} />
          <h3>${product.productName}</h3>
          <p>$${product.price}</p>
          <p>${product.category}</p>
          <p>${product.description}</p>
          <button>Add to Cart</button>
        </div>`;
        });
        document.querySelector(".product-container").innerHTML = str;
      }
    };

    xhr.send(); // Send the request with the form data as a JSON string
  });

  document.querySelector(".clothes").addEventListener("click", function () {
    e.preventDefault();
    var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
    var url = "http://localhost:8080/products/category/clothes"; // Set the API endpoint URL you want to call
    xhr.open("GET", url, true); // Initialize a request with the "POST" method and make it asynchronous

    xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //alert(JSON.stringify(xhr.responseText));
        products = JSON.parse(xhr.responseText);
        console.log(products);
        var str = "";
        products.forEach((product) => {
          str += `<div class="product">
          <img src=${product.image} alt=${product.productName} />
          <h3>${product.productName}</h3>
          <p>$${product.price}</p>
          <p>${product.category}</p>
          <p>${product.description}</p>
          <button>Add to Cart</button>
        </div>`;
        });
        document.querySelector(".product-container").innerHTML = str;
      }
    };

    xhr.send(); // Send the request with the form data as a JSON string
  });

  document.querySelector(".beauty").addEventListener("click", function () {
    e.preventDefault();
    var xhr = new XMLHttpRequest(); // Create a new instance of XMLHttpRequest
    var url = "http://localhost:8080/products/category/beauty"; // Set the API endpoint URL you want to call
    xhr.open("GET", url, true); // Initialize a request with the "POST" method and make it asynchronous

    xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //alert(JSON.stringify(xhr.responseText));
        products = JSON.parse(xhr.responseText);
        console.log(products);
        var str = "";
        products.forEach((product) => {
          str += `<div class="product">
          <img src=${product.image} alt=${product.productName} />
          <h3>${product.productName}</h3>
          <p>$${product.price}</p>
          <p>${product.category}</p>
          <p>${product.description}</p>
          <button>Add to Cart</button>
        </div>`;
        });
        document.querySelector(".product-container").innerHTML = str;
      }
    };

    xhr.send(); // Send the request with the form data as a JSON string
  });

  document
    .querySelector(".product-container")
    .addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("detail-button")) {
        e.preventDefault();
        const productId = e.target.getAttribute("data-product-id");

        console.log(productId);
        window.open(
          "product.html?product_id=" + productId + "&username=" + userName,
          "_blank"
        );
        //window.location.href = "product.html?product_id=" + productId;
        //alert(`Product ID: ${productId}`);
      }
    });

  document.querySelector(".profile").addEventListener("click", function (e) {
    e.preventDefault();

    console.log(userName);
    window.open("profile.html?username=" + userName, "_blank");
  });

  document.querySelector(".cart").addEventListener("click", function (e) {
    e.preventDefault();

    console.log(userName);
    window.open("shoppingCart.html?username=" + userName, "_blank");
  });
});
