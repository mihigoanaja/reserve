a=new marked.Marked();
marker=a.parse;
var text = (document.getElementById("post-body")||document.getElementsByClassName("post-body")[0]).innerHTML;
var html = marker(text);

// Display the HTML
var output = document.getElementById("post-body")||document.getElementsByClassName("post-body")[0];
output.innerHTML = html.replace(/&amp;gt;/g,">");
if (btnInPre!==undefined) {
  btnInPre();
}
