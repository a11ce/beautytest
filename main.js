function upload() {
  document.getElementById('fileInput').value = "";
  document.getElementById('fileInput').click();
}

function redirect() {
if (document.getElementById('fileInput').value != "") {
  window.location.href = "results.html";
}
}
