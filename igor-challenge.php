<?php
/**
 * Plugin Name:       Igor Challenge
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       igor-challenge
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if( !class_exists( 'IgorChallenge' ) ) {
    class IgorChallenge {
        function __construct() {
            add_action( 'init', array( $this, 'igor_blocks_init' ) );

            if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
                add_filter( 'block_categories', array( $this, 'block_categories' ), 11, 2 );
            } else {
                add_filter( 'block_categories_all', array( $this, 'block_categories' ), 11, 2 );
            }
        }

        function igor_register_block( $name, $options = array() ) {
            register_block_type( __DIR__ . '/build/' . $name, $options  );
        }

        function igor_blocks_init() {
            $this->igor_register_block( 'testimonial' );
            $this->igor_register_block( 'accordion-item' );
            $this->igor_register_block( 'accordion' );
        }

        function block_categories( $categories, $block_editor_context ) {
            return array_merge(
                array(
                    array(
                        'slug' => 'igor-blocks',
                        'title' => __('Igor Blocks', 'igor-challenge')
                    )
                ),
                $categories
            );
        }
    }
}

if( class_exists( 'IgorChallenge' ) ) {
    $igorChallenge = new IgorChallenge();
}
