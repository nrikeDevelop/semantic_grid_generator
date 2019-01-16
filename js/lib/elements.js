
//COMON STYLE
var margin = ""
var padding = "padding:2px;"

var style = `style="$
 $padding"`

//SEGMENT
function get_segment(){
    var response = `
    <div class="ui segment drop " >
        //ELEMENT
    </div>
    `;
    return response;
}

//CONTAINERS
function get_left_container() {
    var left_container = `
    <div class="ui left aligned container drop " style="margin:1px;padding:2px;">
        //ELEMENT
    </div>
    `;
    return left_container;
}

function get_right_container() {
    var right_container = `
    <div class="ui right aligned container drop " style="margin:1px;padding:2px;">
        //ELEMENT
    </div>
    `;
    return right_container;
}

function get_center_container() {
    var center_container = `
    <div class="ui center aligned container drop " style="margin:1px;padding:2px;">
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

//IMAGES
function get_small_image(){
    var response = `
    <div class="ui small image">
        <img src="https://semantic-ui.com/images/wireframe/image.png"/>
    </div>`
    return response;
}

function get_medium_image(){
    var response = `
    <div class="ui medium image">
        <img src="https://semantic-ui.com/images/wireframe/image.png"/>
    </div>`
    return response;
}


//GRID
function get_grid_2x1(){
    var response = `
    <div class="ui stackable grid">
        <div class = "row">
            <div class="eight wide column">
                //ELEMENT
            </div>
            <div class="eight wide column">
                //ELEMENT
            </div>
        </div>
    </div>
    `
    return response;
}

function get_grid_2x2(){
    var response = `
    <div class="ui stackable grid ">
        <div class = "row">
            <div class="eight wide column">
                //ELEMENT
            </div>
            <div class="eight wide column">
                //ELEMENT
            </div>
        </div>
        <div class = "row">
            <div class="eight wide column">
                //ELEMENT
            </div>
            <div class="eight wide column">
                //ELEMENT
            </div>
        </div>
    </div>
    `
    return response;
}

function get_grid_3x1(){
    var response = `
    <div class="ui stackable grid">
        <div class = "row">
            <div class="five wide column">
                //ELEMENT
            </div>
            <div class="five wide column">
                //ELEMENT
            </div>
            <div class="five wide column">
                //ELEMENT
            </div>
        </div>
    </div>
    `
    return response;
}

//MENU
function get_navbar(){
    var response=`
    <div class="ui secondary  menu">
        <a class="active item">
        Home
        </a>
        <a class="item">
        Messages
        </a>
        <a class="item">
        Friends
        </a>
        <div class="right menu">
        <div class="item">
            <div class="ui icon input">
                <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
            </div>
        </div>
        <a class="ui item">
            Logout
        </a>
        </div>
    </div>
    `;

    return response;
}

//FORM
function get_add_form(){
    var response = `
    <form class="ui form" action="#">
        <div class="field">
            <label>Label</label>
            <input type="text" name="first-name" placeholder="Input placeholder"/>
        </div>
        <div class="field">
            <div class="ui checkbox">
                <input type="checkbox" tabindex="0" class="hidden"/>
                <label>I agree to the Terms and Conditions</label>
            </div>
        </div>
        <button class="ui button" type="">Submit</button>
    </form>
    `
    return response;  
}

function get_add_input(){
    var response = `
    <label>Label</label>
    <input type="text" name="first-name" placeholder="Input placeholder"/>
    `
    return response;
}

function get_add_checkbox(){
    var response = `
    <div class="ui checkbox">
        <input type="checkbox" tabindex="0" class="hidden"/>
        <label>I agree to the Terms and Conditions</label>
    </div>
    `
    return response;
}

function get_login_or_button(){
    var response = `
    <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
            <div class="column">
            <div class="ui form">
                <div class="field">
                    <label>Username</label>
                    <div class="ui left icon input">
                        <input type="text" placeholder="Username"/>
                        <i class="user icon"></i>
                    </div>
                </div>
                <div class="field">
                    <label>Password</label>
                    <div class="ui left icon input">
                        <input type="password"/>
                        <i class="lock icon"></i>
                    </div>
                </div>
                <div class="ui blue submit button">Login</div>
            </div>
            </div>
            <div class="middle aligned column">
                <div class="ui big button">
                    <i class="signup icon"></i>
                    Sign Up
                </div>
            </div>
        </div>
        <div class="ui vertical divider">
            Or
        </div>
    </div>
    `

    return response;
}


function get_accordion(){
    var response = `
    <div class="ui accordion">
        <div class="title">
            <i class="dropdown icon"></i>
            What is a dog?
        </div>
        <div class="content">
            <p class="transition hidden">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </div>
    </div>


    <script>$('.ui.accordion').accordion();    </script>
    `; 

    return response;
}

function get_grid_3x2(){
    var response = `
    <div class="ui stackable grid">
        <div class = "row">
            <div class="five wide column">
                //ELEMENT
            </div>
            <div class="five wide column">
                //ELEMENT
            </div>
            <div class="five wide column">
                //ELEMENT
            </div>
        </div>
        <div class = "row">
            <div class="five wide column">
                //ELEMENT
            </div>
            <div class="five wide column">
                //ELEMENT
            </div>
            <div class="five wide column">
                //ELEMENT
            </div>
        </div>
    </div>
    `
    return response;
}


function get_table() {
    var table = `
            <table class="ui five column table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>John</td>
                    <td>Approved</td>
                    <td>22</td>
                    </tr>
                    <tr>
                    <td>Jamie</td>
                    <td>Approved</td>
                    <td>32</td>
                    </tr>
                    <tr>
                    <td>Jill</td>
                    <td>Denied</td>
                    <td>22</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <th>3 People</th>
                    <th>2 Approved</th>
                    <th>
                    </th>
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
            <img src="`+ array_images[rnd_image] + `"/>
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