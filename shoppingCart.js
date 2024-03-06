document.addEventListener("DOMContentLoaded", function () {
  updateCart();

  document.querySelector(".details").addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("remove-btn")) {
      e.preventDefault();
      const productId = e.target.getAttribute("data-product-id");
      const quantity = e.target.getAttribute("data-product-value");
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:8080/cart";
      xhr.withCredentials = true;
      xhr.open("POST", url, true);

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          // 重新获取购物车数据并更新页面
          updateCart();
        }
      };
      var formData = {
        userName: getUserName(), // 使用 getUserName() 函数获取用户名
        method: "remove",
        productId: productId,
        quantity: quantity,
      };

      xhr.send(JSON.stringify(formData));
    }
  });
  document
    .querySelector(".checkout-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();

      var xhr = new XMLHttpRequest();
      var url = "http://localhost:8080/checkout";
      xhr.withCredentials = true;
      xhr.open("POST", url, true);

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          alert(xhr.responseText);
          //window.location.href = "order.html?username=" + getUserName();
          window.open("order.html?username=" + getUserName(), "_blank");
        }
      };
      var formData = {
        userName: getUserName(),
        time: getTime(),
      };

      xhr.send(JSON.stringify(formData));
    });
});

function updateCart() {
  const userName = getUserName(); // 获取用户名
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/shoppingcart/products";
  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      carts = JSON.parse(xhr.responseText);

      var str = "";
      var total = 0;
      carts.forEach((cart) => {
        var totalPrice = cart.key.price * cart.value;
        str += `<tr>
          <td class="product-name">${cart.key.productName}</td>
          <td class="value" data-product-value=${cart.value}>${cart.value}</td>
          <td class="price">$${cart.key.price.toFixed(2)}</td>
          <td class="item-total-price">$${totalPrice.toFixed(2)}</td>
          <td><button class="remove-btn" data-product-id=${
            cart.key.productId
          }>X</button></td>
        </tr>`;
        total += totalPrice;
      });
      document.querySelector(".details").innerHTML = str;
      document.querySelector(
        ".total-price"
      ).innerHTML = `Total: $${total.toFixed(2)}`;
    }
  };

  var formData = { userName };
  xhr.send(JSON.stringify(formData));
}

function getUserName() {
  // 从 URL 中提取用户名
  const params = new URLSearchParams(window.location.search);
  return params.get("username");
}

function getTime() {
  var date = new Date();
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
}
