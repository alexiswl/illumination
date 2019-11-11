format_date = function(date) {
  // remove milliseconds
  let d = new Date(Date.parse(date));
  return d.toISOString().split(".")[0] + "Z";
};

print_error = function(e) {
  console.log(`There was an error ${e}`);
};

// From: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
jsonSyntaxHighlight = function(json) {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function(match) {
      var cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
};

module.exports = {
  format_date: format_date,
  print_error: print_error,
  jsonSyntaxHighlight: jsonSyntaxHighlight
};
