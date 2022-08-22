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
