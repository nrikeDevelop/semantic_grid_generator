<html>

<head>
    <!-- SEMANTIC UI -->
    <link rel="stylesheet" type="text/css" href="./semantic/dist/semantic.min.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
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

<?php
$modal_html_munu = array("Card",  "Table", "Segment", "world");

?>



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

    <!--modal-->
    <div class="ui fullscreen modal">
        <div class="content">
            <div class="ui form">
                <label>Elementos comunes</label>
                <div class="four fields">
                    <div class="field">
                        <button class="ui basic button" id="add_card">Añadir Card</button>
                    </div>
                    <div class="field">
                        <button class="ui basic button" id="add_table">Añadir Tabla</button>
                    </div>
                    <div class="field">
                        <button class="ui basic button" id="add_graphic">Añadir Gráfica</button>
                    </div>
                    <div class="field">
                        <button class="ui basic button" id="test">Test</button>
                    </div>
                </div>
            </div>
            <div class="ui form">
                <div class="two fields">
                    <div class="field">
                    <div class="ui left aligned container">
                    
                        <div class="ui buttons">
                            <?php foreach ($modal_html_munu as $button) {?>                             
                            <button id="modal_menu_<?php echo $button ?>" class="ui  button"> <?php echo $button?> </button>
                            <?php } ?> 
                        </div>          
                    </div>
                    </div>
                    <div class="field">
                        <label>CLASS</label>
                        <input id="modal_input_class" type="text">
                    </div>
                </div>
                <div class="two fields">
                    <div class="field">
                        <label>HTML</label>
                        <textarea id="modal_input_html" type="text"></textarea>
                    </div>
                    <div class="field">
                        <label>CSS</label>
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
    <script src="./semantic/dist/semantic.min.js"></script>
    <script>

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
            $('#modal_input_html').val(select_container_html);
            $('#modal_input_css').val(select_container_css);
            $('#modal_input_class').val(select_container_class);

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

        //FUNCTIONS
        $('#add_card').on('click', function () {
            //append_card(select_container);
            $('#modal_input_html').val(
                set_on_position_textarea(
                    $('#modal_input_html').val(), 
                    cursor_html, 
                    get_card(random(0,10)))
            );
        });

        $('#add_table').on('click', function () {
            //append_table(select_container);
            $('#modal_input_html').val(
                set_on_position_textarea(
                    $('#modal_input_html').val(), 
                    cursor_html, 
                    get_table()));
        });

        $('#add_graphic').on('click', function () {
            //append_graphic(select_container);
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
            var get_html = $('#modal_input_html').val();
            if (get_html != "") {
                select_container.empty();
                select_container.append(get_html);
            }

            //CLASS
            var get_class = $('#modal_input_class').val();
            if (get_class != "") {
                select_container.removeClass().addClass(get_class);
            }
        });


    </script>
</footer>

</html>