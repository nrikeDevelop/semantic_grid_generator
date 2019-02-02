 <html>

<head>
    <meta charset="UTF-8">
    <title>Semantic ui Generatir</title>
    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


    <!-- SEMANTIC UI -->
    <link rel="stylesheet" type="text/css" href="./semantic/dist/semantic.min.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
    <script src="./semantic/dist/semantic.min.js"></script>

    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


    <!--Dragable-->
    <script src="https://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>


    <!-- LIBRARY -->
    <link rel="stylesheet" href="./node_modules/codemirror/lib/codemirror.css">
    <link rel="stylesheet" href="./node_modules/codemirror/theme/dracula.css">
    <script src="./node_modules/codemirror/lib/codemirror.js"></script>
    <script src="./node_modules/codemirror/lib/codemirror.autoformatter.js"></script>
    <script src="./node_modules/codemirror/lib/jquery.codemirror.js"></script>
    <script src="./node_modules/codemirror/mode/xml/xml.js"></script>

    <link rel="stylesheet" type="text/css" href="./style/style.css">
    <link rel="stylesheet" type="text/css" href="./style/semantic_alert.css">
    <link rel="stylesheet" type="text/css" href="./style/context_menu.css">

</head>

<body>

<div class="presentation_container ">
        <div class="ui center aligned container" style="padding-top:200px;">
        <img src="img/logo_semantic.png">
        <h1 style="color:white">Semantic ui generator</h1>
        <i style=" padding-top:80px; color:white" class="huge angle double down icon"></i>

</div>

</div>

    <div class="click_container" >
        <div class="click">
            <h1>Right click</h1>
            <img src="./style/images/clicking.png">
        </div>
    </div>

    <div id="toggle-menu" class="toggle-menu" style="display:none" data-aos="fade-up">
        <div class="ui secondary inverted menu">
            <div class="left menu">

            </div>
            <div class="right menu">
                <div class="ui toggle checkbox" style="margin-right: 20px; padding-top:10px">
                    <input id="fluid_checkbox" type="checkbox" name="public">
                    <label><i class="exchange inverted  alternate icon"></i></label>
                </div>
                <div class="ui labeled input" style="margin-left:50px;margin-right:50px;">
                    <div class="ui label">
                        Color
                    </div>
                    <input id="picker_color" name="jscolor" class="jscolor" value="D8DDFF">
                </div>
                <div class="ui labeled input">
                    <div class="ui label">
                        Columns
                    </div>
                    <input id="input" type="number" placeholder="nº columns" style="margin-right: 10px;">
                </div>
                <a id="bt_create" class="ui item"><i class="plus icon"></i>Add row</a>
                <a id="download" class="ui item" style="margin-right:50px;">
                    Download code<i class="download icon" ></i>
                </a>

            </div>
        </div>
        <div>
            <div class="toggle-menu-code">
                <div class="ui secondary inverted vertical menu">
                    <a id="modal_menu_Navbar" class="item">
                        NavBar
                    </a>
                    <a id="modal_menu_Segment" class="item">
                        Segment
                    </a>
                    <div class="ui dropdown item">
                        <i class="dropdown icon"></i>
                        Container
                        <div class="menu">
                            <a id="modal_menu_container_Left" class="item">Left</a>
                            <a id="modal_menu_container_Center" class="item">Center</a>
                            <a id="modal_menu_container_Right" class="item">Right</a>
                        </div>
                    </div>
                    <div class="ui dropdown item">
                        <i class="dropdown icon"></i>
                        Button
                        <div class="menu">
                            <a id="modal_menu_button_Basic" class="item">Basic</a>
                            <a id="modal_menu_button_Primary" class="item">Primary</a>
                            <a id="modal_menu_button_Secondary" class="item">Secondary</a>
                        </div>
                    </div>
                    <div class="ui dropdown item">
                        <i class="dropdown icon"></i>
                        Image
                        <div class="menu">
                            <a id="modal_menu_image_Small" class="item">Small</a>
                            <a id="modal_menu_image_Medium" class="item">Medium</a>
                        </div>
                    </div>
                    <div class="ui dropdown item">
                        <i class="dropdown icon"></i>
                        Grid
                        <div class="menu">
                            <a id="modal_menu_grid_2x1" class="item">2x1</a>
                            <a id="modal_menu_grid_2x2" class="item">2x2</a>
                            <a id="modal_menu_grid_3x1" class="item">3x1</a>
                            <a id="modal_menu_grid_3x2" class="item">3x2</a>
                        </div>
                    </div>
                    <div class="ui dropdown item">
                        <i class="dropdown icon"></i>
                        Form
                        <div class="menu">
                            <a id="modal_menu_form_Form" class="item">Form</a>
                            <a id="modal_menu_form_Input" class="item">Input</a>
                            <a id="modal_menu_form_Checkbox" class="item">Checkbox</a>
                            <a id="modal_menu_form_SimpleForm" class="item">Login form</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toggle-menu-editor">
                <textarea id="modal_input_html"></textarea>

                <div class="ui input" style="width:300px;margin-bottom:15px;margin-top:10px;">
                    <input id="modal_input_class" type="text" placeholder="Class">
                </div>
                <span style="margin-left:20px;color:white">Total dimension in row must be sixteen</span>
            </div>

        </div>
    </div>
    </div>



    <!--CONTEXT MENU-->
    <div class="context_menu">
        <div class="ui vertical menu">
            <div id="edit_context_menu" class="item"><i class="edit icon"></i> Open panel</div>
            <div id="delete_container_context_menu" class="item"><i class="trash icon"></i>Delete container</div>
            <div id="delete_row_context_menu" class="item"><i class="trash icon"></i>Delete row</div>
        </div>
    </div>

    <!--WEB CREATE-->

    <div id="content_code_download" class="grid-parent">
        <div id="container_parent" class="ui container">
            <div class="parent">
                <div id="grid_parent" class="ui grid " style="border-radius: 5px;">

                </div>
            </div>
        </div>
    </div>

</body>
<footer>

    <script src="./js/lib/caret.js"></script>
    <script src="./js/lib/elements.js"></script>
    <script src="./js/lib/tools.js"></script>
    <script src="./js/lib/jscolor.js"></script>
    <script src="./js/lib/createAndSaveZip.js"></script>
    <script src="./js/lib/context_menu.js"></script>
    <script src="./js/lib/semantic_alert.js"></script>
    <script src="./js/lib/sortable.js"></script>
    <script src="./js/lib/jszip.min.js"></script>
    <script src="./js/lib/FileSaver.js"></script>

    <script src="./js/main.js"></script>

    <script>

        $(".open_file").on('click', function () {
            var file = $(this).text();

            console.log(">>  " + file);
            $.ajax({
                // En data puedes utilizar un objeto JSON, un array o un query string
                data: {
                    "action": "read_file",
                    "filename": file,
                },
                type: "POST",
                dataType: "json",
                url: "./saver.php",
            }).done(function (data, textStatus, jqXHR) {
                if (data['success']) {
                    succesAlert('Success', data['message'])
                    $(data['code']).appendTo('#grid_parent')
                }
                if (!data['success']) {
                    errorAlert('Error', data['message'])
                }
            })
        })

        $('#save_project').on('click', function () {

            if (!!$('#filename_text').val()) {
                var code = $('#content_code_download').html();
                $.ajax({
                    // En data puedes utilizar un objeto JSON, un array o un query string
                    data: {
                        "action": "write_file",
                        "filename": $('#filename_text').val(),
                        "code": code
                    },
                    type: "POST",
                    dataType: "json",
                    url: "./saver.php",
                }).done(function (data, textStatus, jqXHR) {
                    if (data['success']) {
                        succesAlert('Success', data['message'])
                    }
                    if (!data['success']) {
                        errorAlert('Error', data['message'])
                    }
                })
            } else {
                warningAlert('Enter filename', 'To save needs filename ')
            }
        });



        AOS.init();

    </script>
</footer>

</html>