function upload() {
  document.getElementById('fileInput').value = "";
  document.getElementById('fileInput').click();
}

function redirect() {
if (document.getElementById('fileInput').value != "") {
  window.location.href = "calculate.html";
}
}

function showScore() {
  setTimeout(goToScore, 5000);
}

function goToScore() {
  window.location.href = "results.html";
}
