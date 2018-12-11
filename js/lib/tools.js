function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function get_number(k) {
    var numbers = new Object();
    numbers[1] = "one";
    numbers[2] = "two";
    numbers[3] = "three";
    numbers[4] = "four";
    numbers[5] = "five";
    numbers[6] = "six";
    numbers[7] = "seven";
    numbers[8] = "eight";
    numbers[16] = "sixteen";
    return numbers[k];
}

function set_on_position_textarea(text_textarea, position, text_to_add) {
    var textAreaTxt = text_textarea;
    return textAreaTxt.substring(0, position) + text_to_add + textAreaTxt.substring(position);
}

