<html>

<head>
    <meta charset="UTF-8">

    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>

    <!-- SEMANTIC UI -->
    <link rel="stylesheet" type="text/css" href="./semantic/dist/semantic.min.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="./semantic/dist/semantic.min.js"></script>

    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


    <!--Dragable-->
    <script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>


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

<div id="top-menu" class="top-menu">
    <div class="toggle-menu-nav">
        <div class="ui fluid center aligned container">
            <div class="ui labeled input">
                <div class="ui label">
                    Columns
                </div>
                <input id="input" type="number" placeholder="nº columns">
            </div>
            <button id="bt_create" class="ui inverted button">Add row</button>
            <div class="ui labeled input" style="margin-left:50px;">
                <div class="ui label">
                    Color
                </div>
                <input id="picker_color" name="jscolor" class="jscolor" value="D8DDFF">
            </div>
            <div class="ui toggle checkbox" style="margin-left: 20px;">
                <input id="fluid_checkbox" type="checkbox" name="public">
                <label><i class="exchange inverted  alternate icon"></i></label>
            </div>

            <button id="download" class="ui inverted button" style="margin:20px;">Download code</button>
        </div>
    </div>
</div>


<?php
        $modal_html_menu = array("Segment","Container", "Button", "Image","Grid","Table", "Card", "Form","NavBar");
        $modal_container_menu = array("Left","Right","Center");
        $modal_button_menu = array("Basic","Primary","Secondary");
        $modal_image_menu = array("Small","Medium");
        $modal_grid_menu = array("2x1","2x2","3x1","3x2");
        $modal_form_menu = array("Form","Input","Checkbox","SimpleForm");
?>

<div id="toggle-menu" class="toggle-menu" style="display:none" data-aos="fade-up">
    <div class="ui center aligned container">
            <?php foreach ($modal_html_menu as $button) {
                switch ($button) {
                    case 'Container':
                        echo "
                        <div id='dropdown' class='ui inverted floating dropdown button'>
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
                        <div id='dropdown' class='ui inverted floating dropdown button'>
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
                        <div id='dropdown' class='ui inverted floating dropdown button'>
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
                    case 'Grid':
                        echo "
                        <div id='dropdown' class='ui inverted floating dropdown button'>
                            <div>Grid</div>
                            <div class='menu'>";
                                foreach($modal_grid_menu as $grid){
                                    echo "<div id='modal_menu_grid_$grid' class='item'>$grid</div>";
                                }                                                 
                        echo "
                            </div>
                        </div>
                        ";
                        break;
                    case 'Form':
                        echo "
                        <div id='dropdown' class='ui inverted floating dropdown button'>
                            <div>Form</div>
                            <div class='menu'>";
                                foreach($modal_form_menu as $form){
                                    echo "<div id='modal_menu_form_$form' class='item'>$form</div>";
                                }                                                 
                        echo "
                            </div>
                        </div>
                        ";
                        break;
                    default:
                        echo "<div id='modal_menu_$button' class='ui inverted floating button'>
                                $button 
                            </div>";
                        break;
                }                                                                                     
            } 
            ?>
    </div>
    <br>
    <div class="ui center aligned container">
        <div class="ui form">
            <div class="field">
                <input id="modal_input_class" type="text" style="width:400px;" placeholder="Class">
            </div>
        </div>
    </div>

    <div class="editor_area" >
        <textarea  id="modal_input_html"></textarea>
    </div>
    </div>


</div>

<!--CONTEXT MENU-->
<div class="context_menu">
    <div id="#menu_1">
        <div class="ui vertical menu">
            <div id="edit_context_menu" class="item"><i class="edit icon"></i> Edit</div>
            <div id="delete_container_context_menu" class="item"><i class="trash icon"></i>Delete container</div>
            <div id="delete_row_context_menu" class="item"><i class="trash icon"></i>Delete row</div>

        </div>
    </div>
</div>
<div class="test_menu">
dfasdf
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





<!--MODAL-->



<!--
<div id="edit_modal" class="ui fullscreen modal">
    <div class="content">
        <div class="ui form">
            <div class="two fields">
                <div class="field">
                    <div class="ui label">ELEMENTS</div>
                    <div class="ui left aligned container">
                        <div class="ui segment">
                            <?php foreach ($modal_html_menu as $button) {
                                    switch ($button) {
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
                                        case 'Grid':
                                            echo "
                                            <div id='dropdown' class='ui floating dropdown button'>
                                                <div>Grid</div>
                                                <div class='menu'>";
                                                    foreach($modal_grid_menu as $grid){
                                                        echo "<div id='modal_menu_grid_$grid' class='item'>$grid</div>";
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
                                } 
                                ?>
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
                    <div class="ui label">HTML</div>
                    <div class="ui input">
                        <textarea id="modal_input_html"></textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="ui label">CSS</div>
                    <textarea id="modal_input_css" type="text"></textarea>
                </div>
            </div>
        </div>
        <br>


        <div class="ui center aligned container">
            <button id="erase_content" class=" negative ui button">Drop content</button>
            <button id="erase_container" class=" negative ui button">Drop container</button>
            <button id="erase_row" class=" negative ui button">Drop row</button>
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

-->

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
        AOS.init();
    
    </script>
</footer>

</html>