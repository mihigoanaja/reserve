a=new marked.Marked();
marker=a.parse;
var text = document.getElementById("post-body").innerHTML;
var html = marker(text);

// Display the HTML
var output = document.getElementById("post-body");
output.innerHTML = html;
