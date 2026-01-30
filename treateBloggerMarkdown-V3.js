function containsMarkdown(str) {
  if (typeof str !== 'string') return false;

  const markdownPatterns = [
    /^#{1,6}\s.+/m,                            // Headers
    /\*\*[^*]+\*\*/g,                         // Bold **
    /__[^_]+__/g,                             // Bold __
    /(\*|_)[^*_]+(\*|_)/g,                    // Italic * or _
    /\[([^\]]+)\]\(([^)]+)\)/g,               // Links
    /!\[([^\]]*)\]\(([^)]+)\)/g,              // Images
    /`{1,3}[^`]+`{1,3}/g,                     // Inline or block code
    /^>\s.+/m,                                // Blockquote
    /^(\s*)[-+*]\s.+/m,                       // Unordered list
    /^(\s*)\d+\.\s.+/m                        // Ordered list
  ];
  return markdownPatterns.some(pattern => pattern.test(str.replace(/\<style\>[\s\S]*?\<\/style\>/g,'').replace(/<[\s\S]*?="[\s\S]*?\"[\s\S]*?>/g,'')));
}
(()=>{
  a=new marked.Marked();
  marker=a.parse;
  var text = (document.getElementById("post-body")||document.getElementsByClassName("post-body")[0]).innerHTML;
  if (containsMarkdown(text)) {
    var html = marker(text);
    
    // Display the HTML
    var output = document.getElementById("post-body")||document.getElementsByClassName("post-body")[0];
    output.innerHTML = html.replace(/&amp;gt;/g,">");
    if (btnInPre!==undefined) {
      btnInPre();
    }
  }
})();
