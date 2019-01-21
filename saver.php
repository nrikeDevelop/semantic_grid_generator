<?php
$jsondata = array();
function save_file(){

    if (file_exists("./projects/".$_POST['filename'])){
        $jsondata['success'] = false;
        $jsondata['message'] = "File already exists";
    }else{
        $myfile = fopen("./projects/".$_POST['filename'], "w");
        $txt=$_POST['code'];
        fwrite($myfile, $txt);
        fclose($myfile);
    
        $jsondata['success'] = true;
        $jsondata['message'] = "File write";
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata);
}

function read_file(){
    
    if (file_exists("./projects/".$_POST['filename'])){
        $myfile = fopen("./projects/".$_POST['filename'], "r");
        $jsondata["code"] = fread($myfile,filesize("./projects/".$_POST['filename']));
        $jsondata["success"] = true;
        $jsondata["message"] = "Code has been loaded";
        fclose($myfile);
    }else{
        $jsondata["page_content"] = null;
        $jsondata["success"] = false;
        $jsondata["message"] = "file not found";
    }

    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata);
}

if( isset($_POST['action']) ) {
    switch($_POST['action']){
        case "write_file" :
            save_file();
        break;
        case "read_file":
            read_file();
        break;
    }
}

