// "DO NOT" 1: "DO NOT" add javascripts directly to a header, template or other file
// START "DO NOT" 2
/** Loading a javascript by echoing out a script tag using the wp_head action **/
add_action( 'wp_head', 'load_my_script' );
function load_my_script() {
    
    echo '<script type="text/javascript" src="' . get_stylesheet_directory_uri() . '/js/custom.js"></script>';
}
// END "DO NOT" 2

// START Example 1.1
/** Load a javasctipt called custom.js located in the active theme's /js directory **/
add_action( 'wp_enqueue_scripts', 'simple_load_script' );
function simple_load_script() {
    
    $src = get_stylesheet_directory_uri() . '/js/custom.js' ;
    wp_register_script( 'custom-script', $src, array( 'jquery' ), '1', TRUE );
    
    wp_enqueue_script( 'custom-script' );
}
// END Example 1.1

// START Example 1.2
/** Load a javasctipt called custom.js located in the active theme's /js directory using separate actions for registering and enqueueing **/
// Register JavaScripts
add_action( 'wp_enqueue_scripts', 'custom_register_scripts' );
function custom_register_scripts() {
    $src = get_stylesheet_directory_uri() . '/js/custom.js' ;
    wp_register_script( 'custom-script', $src, array( 'jquery' ), '1', TRUE );
}
// Enqueue JavaScripts
add_action( 'wp_enqueue_scripts', 'custom_enqueue_scripts' );
function custom_enqueue_scripts() {
    wp_enqueue_script( 'custom-script' );
}
// END Example 1.2

// START Example 1.3
/** Load a javasctipt called custom.js located in the active theme's /js directory only for pages **/
add_action( 'wp_enqueue_scripts', 'custom_script_for_pages' );
function custom_script_for_pages() {
    
    $src = get_stylesheet_directory_uri() . '/js/custom.js' ;
    wp_register_script( 'custom-script', $src, array( 'jquery' ), '1', TRUE );
    if ( is_page() )
        wp_enqueue_script( 'custom-script' );
}
// END Example 1.3

// START Example 2.1
/** Enqueue the Draggable script already registered in WordPress by default **/
add_action( 'wp_enqueue_scripts', 'enqueue_draggable' );
function enqueue_draggable() {
    
    wp_enqueue_script( 'jquery-ui-draggable' );
}
// END Example 2.1

// START Example 2.2
/** Enqueue custom draggable script to automatically enqueue jquery-ui-draggable and draggable.js  **/

add_action( 'wp_enqueue_scripts', 'custom_draggable_script' );
function custom_draggable_script() {
    
    $src = get_stylesheet_directory_uri() . '/js/draggable.js' ;
    wp_register_script( 'custom-draggable-script', $src, array( 'jquery','jquery-ui-draggable' ), '1', TRUE );
    
    wp_enqueue_script( 'custom-draggable-script' );
}
// END Example 2.2

// START Example 3.1
/** Load jQuery from Google APIs **/
add_action( 'wp_enqueue_scripts', 'load_jquery_from_googleapis' );
function load_jquery_from_googleapis() {
    
    wp_deregister_script( 'jquery' );
           
    $src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
    wp_register_script( 'jquery', $src, array(), '1.7.2');
    
    wp_enqueue_script( 'jquery' );
}
// END Example 3.1

// START "DO NOT" 3
/** Build out a JavaScript while in PHP **/
add_action( 'wp_head', 'build_my_script' );
function build_my_script() {
   
    global $current_user;
    get_currentuserinfo();
    
    echo  "\r\n";
    echo  '<script type="text/javascript">' . "\r\n";
        echo "\t" . 'var userid = "' . esc_js( $current_user->ID ) . '";' . "\r\n";
        echo "\t" . 'var fname = "' . esc_js( $current_user->user_firstname ) . '";' . "\r\n";
    echo '</script>' . "\r\n";
}
// END "DO NOT" 3

// START Example 4.1
/** Send User ID and First Name of User over to the custom.js script **/

add_action( 'wp_enqueue_scripts', 'send_user_data_to_custom' );
function send_user_data_to_custom() {
    $src = get_stylesheet_directory_uri() . '/js/custom.js' ;
    wp_register_script( 'custom-script', $src, array( 'jquery' ), '1', TRUE );
    
    wp_enqueue_script( 'custom-script' ); 
        
    global $current_user;
    get_currentuserinfo();
        
    $data = array( 
        'userid' => $current_user->ID,
        'fname' => $current_user->user_firstname
    );
    
    wp_localize_script( 'custom-script', 'userinfo', $data );
    
}
// END Example 4.1


