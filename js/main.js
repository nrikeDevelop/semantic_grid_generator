//http://www.tutorialspark.com/jqueryUI/jQuery_UI_Sortable_Methods_adding_new_Sortable_refresh.php
//COMMON 


editor = $("#modal_input_html").codemirror({
    lineNumbers: true,
    mode: "xml",
    autofocus: true,

    foldGutter: true,
    lineWrapping: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]

});

editor.setValue("");
insertTextAtCursor(editor, "SELECT AREA");

//common semantic ui
$('.ui.accordion').accordion();

$('.ui.dropdown').dropdown();

//sortable (drag and drop)

$("#grid_parent").sortable({
    placeholder: 'slide-placeholder',
    axis: "y",
    revert: 150,
    scroll: false,
    scrollSpeed: 100,
    start: function (e, ui) {
        //AQUI CAMBIAR POR EL TA
        placeholderHeight = ui.item.outerHeight();
        ui.placeholder.height(placeholderHeight + 10);
        $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);

    },
    change: function (event, ui) {

        ui.placeholder.stop().height(0).animate({
            height: ui.item.outerHeight() + 15
        }, 300);

        placeholderAnimatorHeight = parseInt($(".slide-placeholder-animator").attr("data-height"));

        $(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
            height: 0
        }, 300, function () {
            $(this).remove();
            placeholderHeight = ui.item.outerHeight();
            $('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
        });

    },
    stop: function (e, ui) {

        $(".slide-placeholder-animator").remove();

    },
});
/*
       $("#grid_parent").sortable({
   	
           axis: "y",
           revert: true,
           scroll: false,
           placeholder: "sortable-placeholder",
           cursor: "move"
   
           });

         */

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
$("#fluid_checkbox").on('change', function () {
    if ($(this).is(':checked')) {
        $("#container_parent").removeClass();
        $("#container_parent").addClass("ui fluid container");

    } else {
        $("#container_parent").removeClass();
        $("#container_parent").addClass("ui container");

    }
});

$("#picker_color").on('change', function () {
    var color = $("#picker_color").val();
    $("body").css("background-color", "#" + color);
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

    //CREATE AUX TO CONCATENATE CONTAINERS 
    var i;
    var aux;
    for (i = 1; i <= num_dcontent; i++) {
        n_container++;
        var container = `
                    <div id="column" class="` + css_dcontent + ` wide column contenteditable">
                        <div id="dcontent" class="ui segment drop contentstyle"> //CODE </div>
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
is_selected_row = false;
$(document).on('click', '.row', function (e) {
    e.stopPropagation();
    selected_row = $(this);

    select_container = selected_row;
    succesAlert('Row', 'Row selected')
    is_selected_row = true;

    ///$('#edit_modal').modal('show');
    //$( ".toggle-menu" ).slideToggle( "slow" );
});

var selected_dcontent;
is_selected_content = false;
$(document).on('click', '.contenteditable', function (e) {
    e.stopPropagation();

    $('#modal_input_class').val(select_container_class);

    selected_dcontent = $(this);

    select_container = selected_dcontent;
    editor.setValue($.trim(selected_dcontent.html()));

    succesAlert('Container', 'container selected')
    is_selected_content = true;

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
    insertTextAtCursor(editor, get_segment());
});

$('#modal_menu_Card').on('click', function () {
    /*append_card(select_container);
    $('#modal_input_html').val(
        set_on_position_textarea(
            $('#modal_input_html').val(),
            cursor_html,
            get_card(random(0, 10)))
    );*/
    insertTextAtCursor(editor, get_card(random(1, 10)));
});

$('#modal_menu_Table').on('click', function () {
    insertTextAtCursor(editor, get_table());
});

//FUNCTIONS CONTAINERS
$('#modal_menu_container_Left').on('click', function () {
    insertTextAtCursor(editor, get_left_container());
});

$('#modal_menu_container_Right').on('click', function () {
    insertTextAtCursor(editor, get_right_container());
});

$('#modal_menu_container_Center').on('click', function () {
    insertTextAtCursor(editor, get_center_container());
});

//FUNCTIONS BUTTONS
$('#modal_menu_button_Basic').on('click', function () {
    insertTextAtCursor(editor, get_basic_button());
});

$('#modal_menu_button_Primary').on('click', function () {
    insertTextAtCursor(editor, get_primary_button());
});

$('#modal_menu_button_Secondary').on('click', function () {
    insertTextAtCursor(editor, get_secondary_button());
});

//FUNCTIONS IMAGES
$('#modal_menu_image_Small').on('click', function () {
    insertTextAtCursor(editor, get_small_image());
});

$('#modal_menu_image_Medium').on('click', function () {
    insertTextAtCursor(editor, get_medium_image());
});

//FUNCTIONS GRID
$('#modal_menu_grid_2x1').on('click', function () {
    insertTextAtCursor(editor, get_grid_2x1());
});

$('#modal_menu_grid_2x2').on('click', function () {
    insertTextAtCursor(editor, get_grid_2x2());
});

$('#modal_menu_grid_3x1').on('click', function () {
    insertTextAtCursor(editor, get_grid_3x1());
});

$('#modal_menu_grid_3x2').on('click', function () {
    insertTextAtCursor(editor, get_grid_3x2());
});

//FUNCTIONS FORM
$('#modal_menu_form_Form').on('click', function () {
    insertTextAtCursor(editor, get_add_form());
});

$('#modal_menu_form_Input').on('click', function () {
    insertTextAtCursor(editor, get_add_input());
});

$('#modal_menu_form_Checkbox').on('click', function () {
    insertTextAtCursor(editor, get_add_checkbox());
});

$('#modal_menu_form_SimpleForm').on('click', function () {
    insertTextAtCursor(editor, get_login_or_button());
});



//FUNCTIONS ACCORDING
$('#modal_menu_Accordion').on('click', function () {
    insertTextAtCursor(editor, get_accordion());
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


$('#modal_input_class').on('change', function () {
    var get_class = $('#modal_input_class').val();
    if (get_class != "") {
        select_container.removeClass().addClass(get_class);
    }
});


var wto;
editor.on('change', function (cMirror) {
    clearTimeout(wto);
    wto = setTimeout(function () {
        var get_html = editor.getValue();
        if (get_html != "") {
            select_container.empty();
            select_container.append(get_html);
        }
    }, 100);
});

$('#download').on('click', function () {
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

$('#edit_button').click(function () {
    $("#toggle-menu").slideToggle("slow");
});

//CONTEXT_MENU

//CONTEXT MENU 
var menu = document.querySelector('.context_menu');

function showMenu(x, y) {
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('menu-show');
}

function hideMenu() {
    menu.classList.remove('menu-show');
}

function onContextMenu(e) {
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('mousedown', onMouseDown, false);
    //ACTION RIGHT CLICK
}

var handler;
function onMouseDown(e) {
    clearTimeout(handler);
    handler = setTimeout(function () {
        hideMenu();
        document.removeEventListener('mousedown', onMouseDown);
    }, 100);
}

document.addEventListener('contextmenu', onContextMenu, false);


$('#edit_context_menu').click(function () {
    $("#toggle-menu").slideToggle("slow");
});

$('#delete_container_context_menu').click(function () {
    if (is_selected_content) {

        selected_dcontent.remove();
        errorAlert('Delete', 'Container deleted')

        is_selected_content = false;
    } else {
        warningAlert('Not selected', 'Container not selected')
    }

});

$('#delete_row_context_menu').click(function () {
    if (is_selected_row) {

        selected_row.remove();
        errorAlert('Delete', 'Row deleted')

        is_selected_row = false;
    } else {
        warningAlert('Not selected', 'Row not selected')
    }

});



/*
$('#element').mousedown(function(event) {
    switch (event.which) {
        case 1:
            alert('Left Mouse button pressed.');
            break;
        case 2:
            alert('Middle Mouse button pressed.');
            break;
        case 3:
            alert('Right Mouse button pressed.');
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
*/