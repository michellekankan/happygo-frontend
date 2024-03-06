document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const userName = params.get("username");
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  var url = "http://localhost:8080/order?username=" + userName;
  xhr.open("POST", url, true); // Initialize a request with the "POST" method and make it asynchronous

  xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type of the request

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      orders = JSON.parse(xhr.responseText);
      console.log(orders);
      console.log(orders.carts[0].key.productName);
      console.log(orders.time);
      var str = "";
      var total = 0;
      orders.carts.forEach((item) => {
        var totalPrice = item.key.price * item.value;
        str += `<tr>
            <td class="product-name">${item.key.productName}</td>
            <td class="value" data-product-value=${item.key.productName}>${
          item.value
        }</td>
            <td class="price">$${item.key.price.toFixed(2)}</td>
            <td class="item-total-price">$${totalPrice.toFixed(2)}</td>
          </tr>`;
        total += totalPrice;
      });
      str += `<tr>
      <td>Total</td>
      <td></td>
      <td></td>
      <td>$${total}</td>
      `;
      document.querySelector(".details").innerHTML = str;
      document.querySelector(".order-date").innerHTML =
        "Order Date: " + orders.time;
      document.querySelector(".order-address").innerHTML = orders.address;
    }
  };

  var formData = { userName: userName };
  xhr.send(JSON.stringify(formData));
});
