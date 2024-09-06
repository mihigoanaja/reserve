a=new marked.Marked();
marker=a.parse;
var text = document.getElementById(&quot;post-body&quot;).innerHTML;
var html = marker(text);

// Display the HTML
var output = document.getElementById(&quot;post-body&quot;);
output.innerHTML = html;
