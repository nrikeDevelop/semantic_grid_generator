        //COMMON 


        editor = $("#modal_input_html").codemirror({
            lineNumbers:true,
            mode : "xml",
            autofocus: true,
            //lineNumbers : true,
        });

        codeDownload = $("textarea#modal_download_code").codemirror({
            mode : "xml",
            //lineNumbers : true,
        });

        $('.ui.dropdown').dropdown({
            showOnFocus:false,
        });

        editor.setValue("");
        insertTextAtCursor(editor,"SELECT AREA");
        //END COMMON

        //START PAGE
        $("#fluid_checkbox").on( 'change', function() { 
            if( $(this).is(':checked') ) {
                $("#container_parent").removeClass();
                $("#container_parent").addClass("ui fluid container");

            } else {
                $("#container_parent").removeClass();
                $("#container_parent").addClass("ui container");

            }
        });

        $("#picker_color").on( 'change', function() { 
            var color = $("#picker_color").val();
            $("#grid_parent").css( "background-color", "#"+color);    
        });
        

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
            //row drop style rowstyle
            var row = `
            <div id="row" class="row drop style"></div>
            `;
            var content_row = $(row);

            var container_content = `//CODE`;

            //CREATE AUX TO CONCATENATE CONTAINERS 
            var i;
            var aux;
            for (i = 1; i <= num_dcontent; i++) {
                n_container++;
                var container = `
                    <div id="column" class="` + css_dcontent + ` wide column contenteditable">
                        <div id="dcontent" class="ui segment drop contentstyle">` + container_content + `</div>
                    </div>
                    `;
                aux = content_row.append(container);
            };

            $('#grid_parent').append(aux);
        });


        //SELECT DCONTENT
        var select_container;
        var select_container_class;
        $(document).on('click', '.column', function () {
            select_container = $(this);
            select_container_class = select_container.attr('class');
        });

        /*
        var selected_row;
        $(document).on('click', '.row', function (e) {
            e.stopPropagation();

            selected_row = $(this);

            select_container = selected_row;
            
            editor.setValue($.trim(selected_row.html()));

            ///$('#edit_modal').modal('show');
            //$( ".toggle-menu" ).slideToggle( "slow" );
        });
        */

        var selected_dcontent;
        $(document).on('click', '.contenteditable', function (e) {
            e.stopPropagation();

            $('#modal_input_class').val(select_container_class);

            selected_dcontent = $(this);
            select_container = selected_dcontent;
            editor.setValue($.trim(selected_dcontent.html()));
            //$('#edit_modal').modal('show');
            //$( ".toggle-menu" ).slideToggle( "slow" );
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
            insertTextAtCursor(editor,get_card(random(1, 10)));
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

        //FUNCTIONS GRID
        $('#modal_menu_grid_2x1').on('click',function(){
            insertTextAtCursor(editor,get_grid_2x1());
        });

        $('#modal_menu_grid_2x2').on('click',function(){
            insertTextAtCursor(editor,get_grid_2x2());
        });

        $('#modal_menu_grid_3x1').on('click',function(){
            insertTextAtCursor(editor,get_grid_3x1());
        });

        $('#modal_menu_grid_3x2').on('click',function(){
            insertTextAtCursor(editor,get_grid_3x2());
        });


        //FUNCTIONS ERASE
        $('#erase_content').on('click', function () {
            select_container.empty();
            //select_container.removeClass().addClass("ui segment");
            $('#edit_modal').modal('hide');
        });

        $('#erase_container').on('click', function () {
            select_container.remove();
            $('#edit_modal').modal('hide');

        });

        $('#erase_row').on('click', function () {
            selected_row.remove();
            $('#edit_modal').modal('hide');

        });


        $('#modal_input_class').on('change',function(){
            var get_class = $('#modal_input_class').val();
            if (get_class != "") {
                select_container.removeClass().addClass(get_class);
            }
        });

        editor.on('change',function(cMirror){
            var get_html = editor.getValue();
            if(get_html != ""){
                select_container.empty();
                select_container.append(get_html);
            }

        });


        $('#download').on('click',function(){
            var code = $('#content_code_download').html();
            
            //codeDownload.setValue(code);
            //formatTextarea(codeDownload);
            //var formatedCode = codeDownload.getValue();
            
    
            //GET ALL CONTAINERS AND DROP STYLE
            var i, $container = $('.drop');
            for (i=0; i<$container.length; i++)    {
                $container.eq(i).removeClass('rowstyle contentstyle');  
            }
    
            createZip(code);

    

        });

        //EDIT MENU

        $('#edit_button').click(function(){
            $( ".toggle-menu" ).slideToggle( "slow" );
           
            
        });
