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
