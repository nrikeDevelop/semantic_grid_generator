<html>

<head>
        
    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
    

    <!-- SEMANTIC UI -->
    <link rel="stylesheet" type="text/css" href="./semantic/dist/semantic.min.css">
    <script
    src="https://code.jquery.com/jquery-3.1.1.min.js"
    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
    crossorigin="anonymous"></script>
    <script src="./semantic/dist/semantic.min.js"></script>

    <link rel="stylesheet"  href="./node_modules/codemirror/lib/codemirror.css">
    <link rel="stylesheet"  href="./node_modules/codemirror/theme/dracula.css">
    <script src="./node_modules/codemirror/lib/codemirror.js"></script>
    <script src="./node_modules/codemirror/lib/codemirror.autoformatter.js"></script>
    <script src="./node_modules/codemirror/lib/jquery.codemirror.js"></script>
    <script src="./node_modules/codemirror/mode/xml/xml.js"></script>


    <style>
        body{
                background-color:#F1F1F1;    
            }
        .dcontent{
    
                background-color:#C4D2DA;
                padding:20px;
                border-radius: 9px;
                
            }
    </style>
    <meta charset="UTF-8">
</head>

<div class=" ui center aligned container">

    <div class="ui segment" style="margin-bottom: 50px;margin-top: 10px;">
        <div class="ui form">
            <div class="two fields">
                <div class="field">
                    <input id="input" type="number" placeholder="nº por fila">
                </div>
                <div class="field">
                    <button id="bt_create" class="ui basic button">Crear fila</button>
                </div>
            </div>
        </div>
    </div>

    <div id="grid_parent" class="ui grid " style=" background-color: #D8DDFF"></div>


    <?php
        $modal_html_menu = array("Segment","Container", "Button", "Image", "Table", "Card");
        $modal_container_menu = array("Left","Right","Center");
        $modal_button_menu = array("Basic","Primary","Secondary");
        $modal_image_menu = array("Small","Medium");
    ?>
    <!--MODAL-->
    <div class="ui fullscreen modal">
        <div class="content">
            <div class="ui form">
                <div class="two fields">
                    <div class="field">
                        <div class="ui label">ELEMENTS</div>
                        <div class="ui left aligned container">
                            
                            <div class="ui buttons">
                                <?php foreach ($modal_html_menu as $button) {?>
                                    <?php switch ($button) {
                                        case 'Container':
                                            echo "
                                            <div id='dropdown' class='ui floating dropdown button'>
                                                <div>Container</div>
                                                <div class='menu'>";
                                                    foreach($modal_container_menu as $container){
                                                        echo "<div id='modal_menu_container_$container' class='item'>$container</div>";
                                                    }                                                 
                                            echo "
                                                </div>
                                            </div>
                                            ";
                                            break;
                                        case 'Button':
                                            echo "
                                            <div id='dropdown' class='ui floating dropdown button'>
                                                <div>Button</div>
                                                <div class='menu'>";
                                                    foreach($modal_button_menu as $button){
                                                        echo "<div id='modal_menu_button_$button' class='item'>$button</div>";
                                                    }                                                 
                                            echo "
                                                </div>
                                            </div>
                                            ";
                                            break;
                                        case 'Image':
                                            echo "
                                            <div id='dropdown' class='ui floating dropdown button'>
                                                <div>Image</div>
                                                <div class='menu'>";
                                                    foreach($modal_image_menu as $image){
                                                        echo "<div id='modal_menu_image_$image' class='item'>$image</div>";
                                                    }                                                 
                                            echo "
                                                </div>
                                            </div>
                                            ";
                                            break;
                                        default:
                                            echo "<div id='modal_menu_$button' class='ui floating button'>
                                                    $button 
                                                </div>";
                                            break;
                                    }
                                    ?>
                                
                                <?php } ?>                             
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui label">CLASS</div>
                        <input id="modal_input_class" type="text">
                    </div>
                </div>
                <div class="two fields">
                    <div class="field">
                        <div class="ui label">CLASS</div>
                        <textarea id="modal_input_html" type="text"></textarea>
                    </div>
                    <div class="field">
                        <div class="ui label">CSS</div>
                        <textarea id="modal_input_css" type="text"></textarea>
                    </div>
                </div>
            </div>
            <br>
            <div class="ui center aligned container">
                <button id="erase_content" class="fluid negative ui button">Borrar contenido</button>
            </div>
            <div class="ui center aligned container">
                <button id="erase_container" class="fluid negative ui button">Borrar contenedor</button>
            </div>
            <br>

        </div>
        <div class="actions">
            <div class="ui red basic cancel inverted button">
                <i class="remove icon"></i>
                No
            </div>
            <div id="input_yes" class="ui green ok inverted button">
                <i class="checkmark icon"></i>
                Yes
            </div>
        </div>
    </div>

</div>
</div>

<footer>
<script src="./js/caret.js"></script>
    <script src="./js/elements.js"></script>
    <script src="./js/tools.js"></script>
    <script>
        //COMMON 

        editor = $("textarea#modal_input_html").codemirror({
            mode : "xml",
            //lineNumbers : true,
        });


        $('.ui.dropdown').dropdown({
            showOnFocus:false,
        });

        //END COMMON
        

        //APPEND ELEMENTS
        function append_table(selector) {
            var table = get_table();
            selector.append(table);
        }

        function append_card(selector) {
            var card = get_card(random(1, 10));
            selector.append(card);
        }

        function append_graphic(selector) {
            var options = {
                title: {
                    text: "Desktop OS Market Share in 2017"
                },
                subtitles: [{
                    text: "As of November, 2017"
                }],
                animationEnabled: true,
                data: [{
                    type: "pie",
                    startAngle: 40,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [
                        { y: 48.36, label: "Windows 7" },
                        { y: 26.85, label: "Windows 10" },
                        { y: 1.49, label: "Windows 8" },
                        { y: 6.98, label: "Windows XP" },
                        { y: 6.53, label: "Windows 8.1" },
                        { y: 2.45, label: "Linux" },
                        { y: 3.32, label: "Mac OS X 10.12" },
                        { y: 4.03, label: "Others" }
                    ]
                }]
            };
            var graphic = `<div id="chartContainer" style="height: 370px; width: 100%;"></div>`
            selector.append(graphic);
            $("#chartContainer").CanvasJSChart(options);
        }

        var n_container = 0;
        $("#bt_create").click(function () {

            //GET NUMBER
            num_dcontent = $('#input').val();
            css_dcontent = get_number(Math.round(16 / num_dcontent));

            //CREATE VAR ROW AND DEFINE LIKE SELECTOR
            var row = `<div id="row" class="row"></div>`;
            var content_row = $(row);

            var container_content = `//CODE`;

            //CREATE AUX TO CONCATENATE CONTAINERS 
            var i;
            var aux;
            for (i = 1; i <= num_dcontent; i++) {
                n_container++;
                var container = `
                    <div id="column" class="` + css_dcontent + ` wide column "><div id="dcontent" class="ui segment">` + container_content + `</div></div>`;
                aux = content_row.append(container);
            };

            $('#grid_parent').append(aux);
        });
    
        //SELECT DCONTENT
        //--MODAL
        var select_container;
        var select_container_html;
        var select_container_css;
        var select_container_class;
        $(document).on('click', '.column', function () {
            select_container = $(this);
            select_container_html = select_container.html();
            select_container_css = select_container.attr('style');
            select_container_class = select_container.attr('class');
            $('#modal_input_css').val(select_container_css);
            $('#modal_input_class').val(select_container_class);

            editor.setValue(select_container_html);
           
            //$('#modal_input_html').val(select_container_html);

            $('.ui.fullscreen.modal').modal('show');
        });

        var selected_row;
        $(document).on('click', '.row', function () {
            selected_row = $(this);
        });

        var cursor_html;
        $('#modal_input_html').on('mouseup keydown', function (e) {
            cursor_html = $('#modal_input_html').caret('pos');
        });

        //FUNCTIONS MENU
        $('#modal_menu_Segment').on('click', function () {
            insertTextAtCursor(editor,get_segment());
        });

        $('#modal_menu_Card').on('click', function () {
            /*append_card(select_container);
            $('#modal_input_html').val(
                set_on_position_textarea(
                    $('#modal_input_html').val(),
                    cursor_html,
                    get_card(random(0, 10)))
            );*/
            insertTextAtCursor(editor,get_card(random(0, 10)));
        });

        $('#modal_menu_Table').on('click', function () {
            insertTextAtCursor(editor,get_table());
        });

        //FUNCTIONS CONTAINERS
        $('#modal_menu_container_Left').on('click', function () {
            insertTextAtCursor(editor,get_left_container());
        });

        $('#modal_menu_container_Right').on('click', function () {
            insertTextAtCursor(editor,get_right_container());
        });

        $('#modal_menu_container_Center').on('click', function () {
            insertTextAtCursor(editor,get_center_container());
        });

        //FUNCTIONS BUTTONS
        $('#modal_menu_button_Basic').on('click', function () {
            insertTextAtCursor(editor,get_basic_button());
        });

        $('#modal_menu_button_Primary').on('click', function () {
            insertTextAtCursor(editor,get_primary_button());
        });

        $('#modal_menu_button_Secondary').on('click', function () {
            insertTextAtCursor(editor,get_secondary_button());
        });

        //FUNCTIONS IMAGES
        $('#modal_menu_image_Small').on('click',function(){
            insertTextAtCursor(editor,get_small_image());
        });

        $('#modal_menu_image_Medium').on('click',function(){
            insertTextAtCursor(editor,get_medium_image());
        });

        $('#erase_content').on('click', function () {
            select_container.empty();
            //select_container.removeClass().addClass("ui segment");
            $('.ui.fullscreen.modal').modal('hide');
        });

        $('#erase_container').on('click', function () {
            select_container.remove();
            $('.ui.fullscreen.modal').modal('hide');

        });

        $('#input_yes').on('click', function () {
            //CSS
            var get_css = $('#modal_input_css').val();
            if (get_css != "") {
                select_container.attr('style', get_css);
                //select_container.html(get_css);
            }

            //HTML
            var get_html = editor.getValue();
            if(get_html != ""){
                select_container.empty();
                select_container.append(get_html);
            }

            /* LAST METHOD
            var get_html = $('#modal_input_html').val();
            if (get_html != "") {
                select_container.empty();
                select_container.append(get_html);
            }
            */

            //CLASS
            var get_class = $('#modal_input_class').val();
            if (get_class != "") {
                select_container.removeClass().addClass(get_class);
            }
        });

    </script>
</footer>

</html>