<?php
/**
 * Description: Custom WordPress functionality
 */

if (!defined('ABSPATH')) exit;

add_shortcode('current_date', function ($atts) {
  $atts = shortcode_atts(['format' => 'F j, Y'], $atts);
  return esc_html(wp_date($atts['format']));
});

add_filter('the_content', function ($content) {
  return str_replace(
    '<a ',
    '<a rel="noopener noreferrer" target="_blank" ',
    $content
  );
});
