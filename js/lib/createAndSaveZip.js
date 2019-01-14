//REQUIRE jszip.min.js AND FileSaver.js

var saveName = "semantic_UI_code.zip"

/*
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
*/
var head = `
<html>
<head>
    <meta charset="utf-8" />
    <title>Semantic UI generated</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js"></script>
</head>
`;

var footer = `
<footer>
    <script>$('.ui.accordion').accordion();</script>
</footer>
</html>
`;

function createZip(code){
	var html = head + '<body style="background-color:'+background_color+'">' + code + '</body>'+ footer;
	var zip = new JSZip();
    zip.file("index.html", html);
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, saveName);
    });
}
  