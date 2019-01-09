        //COMMON 


        editor = $("#modal_input_html").codemirror({
            lineNumbers:true,
            mode : "xml",
            autofocus: true,
            //lineNumbers : true,
        });



        $('.ui.dropdown').dropdown({
            showOnFocus:false,
        });

        editor.setValue("");
        insertTextAtCursor(editor,"SELECT AREA");

        $('.ui.accordion').accordion();



        /*
        $active_scroll = false;
        window.addEventListener("scroll", function (event) {
            var scroll = this.scrollY;
            if ( scroll > 283){
                //menu
                $('#top-menu').removeClass('top-menu');
                $('#top-menu').addClass('top-menu-fixed');
                //toggle -menu
                //$('#toggle-menu').attr('style', 'display:none;position: fixed;bottom: 0;z-index: 3;');
                $('#toggle-menu').removeClass('toggle-menu');
                $('#toggle-menu').addClass('toggle-menu-fixed');
            }else{
                $('#top-menu').removeClass('top-menu-fixed');
                $('#top-menu').addClass('top-menu');

                $('#toggle-menu').removeClass('toggle-menu-fixed');
                $('#toggle-menu').addClass('toggle-menu');
            }
            console.log(scroll)
        });
        */

    

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
            $("body").css( "background-color", "#"+color);    
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

        var n_container = 0;
        $("#bt_create").click(function () {

            //GET NUMBER
            num_dcontent = $('#input').val();
            css_dcontent = get_number(Math.round(16 / num_dcontent));

            //CREATE VAR ROW AND DEFINE LIKE SELECTOR
            //row drop style rowstyle
            var row = `
            <div id="row" class="row drop rowstyle"></div>
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
        
        var selected_row;
        $(document).on('click', '.row', function (e) {
            e.stopPropagation();
            selected_row = $(this);

            select_container = selected_row;
            
           // alert(selected_row);

            ///$('#edit_modal').modal('show');
            //$( ".toggle-menu" ).slideToggle( "slow" );
        });
        
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

/*
        $(document).on('click', '.contentstyle', function () {
            $(this).addClass("tertiary inverted orange segment")
        });
*/


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

        //FUNCTIONS FORM
        $('#modal_menu_form_Form').on('click',function(){
            insertTextAtCursor(editor,get_add_form());
        });
        
        $('#modal_menu_form_Input').on('click',function(){
            insertTextAtCursor(editor,get_add_input());
        });

        $('#modal_menu_form_Checkbox').on('click',function(){
            insertTextAtCursor(editor,get_add_checkbox());
        });

        $('#modal_menu_form_SimpleForm').on('click',function(){
            insertTextAtCursor(editor,get_login_or_button());
        });



        //FUNCTIONS ACCORDING
        $('#modal_menu_Accordion').on('click',function(){
            insertTextAtCursor(editor,get_accordion());
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


        var wto;
        editor.on('change',function(cMirror){
            clearTimeout(wto);
            wto = setTimeout(function() {
                var get_html = editor.getValue();
                if(get_html != ""){
                    select_container.empty();
                    select_container.append(get_html);
                }
            }, 100);
        });

        $('#download').on('click',function(){
            var code = $('#content_code_download').html();
            
            //codeDownload.setValue(code);
            //formatTextarea(codeDownload);
            //var formatedCode = codeDownload.getValue();
            
    
            //GET ALL CONTAINERS AND DROP STYLE
            /*
            var i, $container = $('.drop');
            for (i=0; i<$container.length; i++)    {
                $container.eq(i).removeClass('rowstyle contentstyle');  
            }
    */
            createZip(code);

    

        });

        //EDIT MENU

        $('#edit_button').click(function(){
            $( "#toggle-menu" ).slideToggle( "slow" );
            $.notify("Access granted", "success").options({
                autoHide:true,
                autoHideDelay: 1000
              });
        });

        //CONTEXT_MENU
        $('#edit_context_menu').click(function(){
            $( "#toggle-menu" ).slideToggle( "slow" );
        });

        $('#delete_container_context_menu').click(function(){
            selected_dcontent.remove();
        });

        $('#delete_row_context_menu').click(function(){
            selected_row.remove();
        });




