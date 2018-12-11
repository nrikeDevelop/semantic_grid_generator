//REQUIRE jszip.min.js AND FileSaver.js

var saveName = "semantic_UI_code.zip"

var head = `
<head>
    <meta charset="utf-8" />
    <title>Semantic UI generated</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
</head>
`;


function createZip(code){
	var html = head + code;
	var zip = new JSZip();
    zip.file("index.html", html);
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, saveName);
    });
}
  