var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}

function loadUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.3dd.ricoh.com/ricoh-api/function_list");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("x-Ricoh-token", "WncdQa0/vfL0RSg46mfe5/lqIDxJ3U8DntuFjICtnLxtTBpnFI6nakg3JSWOOPCu3WZxV7bwG4DXxgpQRkdBTfS0fcF5qSL2sV3nKnyA+Sj4QCXYHd7xDQFWKJwOwMMSmnEeT709T0yTcUAanxdU9aiAgqCWYQj+Qb9RPMbBPjXw7GT0w81xp9dDrQ7qs6nfKqb8sZWEla7k2WGsDpUTPlBgaP050MOU0GQDjqQUqyDN0Fx/N9Zm2jkZQuzsOdVpGL8snpBJJZCVU1LilR4kbCSwQxz4tAsZTtM++Fe50LE=");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects)
      if (objects["success"] == true) {
        const username = objects["username"]
        
      }
    }
  };
}

loadUser();

function logout() {
  localStorage.removeItem("jwt");
  window.location.href = './login.html'
}