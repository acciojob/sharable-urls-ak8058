// your code here
document.getElementById("button").onclick = function () {
  let name = document.getElementById("name").value.trim();
  let graduationyear = document.getElementById("year").value.trim();
  let url = "https://localhost:8080/";
  if (name && graduationyear) {
    url +=
      "?name=" +
      encodeURIComponent(name) +
      "&year=" +
      encodeURIComponent(graduationyear);
  } else if (name) {
    url += "?name=" + encodeURIComponent(name);
  } else if (graduationyear) {
    url += "&year=" + encodeURIComponent(graduationyear);
  }
  document.getElementById("url").textContent = url;
};