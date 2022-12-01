const form = document.form;
const url = "https://retoolapi.dev/AznfKA/data";

function sendRequest(method, url) {
  fetch("https://retoolapi.dev/AznfKA/data")
    .then((response) => response.json())
    .then((user) =>
      user.filter(
        (user) =>
          user.email === form[0].value && user.password === form[1].value
      )
    )
    .then((response) =>
      localStorage.setItem("user", JSON.stringify(response[0]))
    )
    .then(() => {
      if (localStorage.getItem("user") != 'undefined') {
        window.location.pathname = "home%20page/index.html";
      }else {
        window.location.pathname = "html/authorization_orders.html";
      }
    });
}
form.addEventListener("submit", (event) => event.preventDefault());
form[2].addEventListener("click", sendRequest);
