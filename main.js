

function upload() {
  document.getElementById('fileInput').value = "";
  document.getElementById('fileInput').click();
}

function redirect() {
if (document.getElementById('fileInput').value != "") {
  window.location.href = "calculate.html?id=" + Date.now();
}
}

function showScore() {
  setTimeout(goToScore, 5000);
}

function goToScore() {
  var id = window.location.href.slice( window.location.href.indexOf( '?' ) + 1 )
  window.location.href = "results.html?" + id;
}

function populateShareScore()
{
document.getElementById("shareScore").innerHTML += "<a style=\"color:blue;\" href=\""+ window.location.href+ "\">"+ window.location.href + "</a>";
}
