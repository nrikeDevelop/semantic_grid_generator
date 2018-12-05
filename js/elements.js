//SEGMENT
function get_segment(){
    var response = `
    <div class="ui segment">
        //ELEMENT
    </div>
    `;
    return response;
}

//CONTAINERS
function get_left_container() {
    var left_container = `
    <div class="ui left aligned container">
        //ELEMENT
    </div>
    `;
    return left_container;
}

function get_right_container() {
    var right_container = `
    <div class="ui right aligned container">
        //ELEMENT
    </div>
    `;
    return right_container;
}

function get_center_container() {
    var center_container = `
    <div class="ui center aligned container">
        //ELEMENT
    </div>
    `;
    return center_container;
}

//BUTTONS
function get_basic_button() {
    var response = `
    <button href="#" class="ui basic button">Button</button>
    `;
    return response;
}

function get_primary_button() {
    var response = `
    <button href="#" class="ui primary button">Button</button>
    `;
    return response;
}

function get_secondary_button() {
    var response = `
    <button href="#" class="ui secondary button">Button</button>
    `;
    return response;
}

function get_table() {
    var table = `
            <table class="ui five column table">
                <thead>
                    <tr><th>Name</th>
                    <th>Status</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Notes</th>
                </tr></thead>
                <tbody>
                    <tr>
                    <td>John</td>
                    <td>Approved</td>
                    <td>22</td>
                    <td>Male</td>
                    <td>None</td>
                    </tr>
                    <tr>
                    <td>Jamie</td>
                    <td>Approved</td>
                    <td>32</td>
                    <td>Male</td>
                    <td>Requires call</td>
                    </tr>
                    <tr>
                    <td>Jill</td>
                    <td>Denied</td>
                    <td>22</td>
                    <td>Female</td>
                    <td>None</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr><th>3 People</th>
                    <th>2 Approved</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr></tfoot>
            </table>`;

    return table;
}

function get_card(rnd_image) {

    var array_images = new Object();
    array_images[1] = "https://playjoor.com/assets/avatar/helen.jpg";
    array_images[2] = "https://playjoor.com/assets/avatar/jenny.jpg";
    array_images[3] = "https://playjoor.com/assets/avatar/joe.jpg";
    array_images[4] = "https://playjoor.com/assets/avatar/mark.png";
    array_images[5] = "https://playjoor.com/assets/avatar/molly.png";
    array_images[6] = "https://playjoor.com/assets/avatar/nan.jpg";
    array_images[7] = "https://playjoor.com/assets/avatar/patrick.png";
    array_images[8] = "https://playjoor.com/assets/avatar/rachel.png";
    array_images[9] = "https://playjoor.com/assets/avatar/steve.jpg";
    array_images[10] = "https://playjoor.com/assets/avatar/stevie.jpg";

    var card = `
    <div class="ui card">
        <div class="image">
            <img src="`+ array_images[rnd_image] + `">
        </div>
        
        <div class="content">
            <a class="header">Kristy</a>
            <div class="meta">
            <span class="date">Joined in 2013</span>
            </div>
            <div class="description">
            Kristy is an art director living in New York.
            </div>
        </div>
        <div class="extra content">
            <a>
            <i class="user icon"></i>
            22 Friends
            </a>
        </div>
    </div>`;
    return card;
}