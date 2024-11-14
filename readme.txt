* WCL Dynamic Counter Update

A WordPress plugin that displays a dynamic counter. The counter automatically increments by a random value (between 8-9) every minute and stores the value in the database. Ideal for showcasing stats, visitor counts, or other incrementing numbers.

## Features

- **Automatic Increment**: The counter increases by a random amount (8-9) every minute.
- **Shortcode Display**: Easily display the counter on any page or post using a simple shortcode.
- **Admin Settings**: Adjust the counter’s starting value from the WordPress admin settings page.
- **Efficient**: Utilizes a one-minute custom cron job for lightweight performance.

## Installation

1. Clone or download the plugin repository to your WordPress `wp-content/plugins` directory:
   ```bash
   git clone https://github.com/forkanhossain/wcl-dynamic-counter-update.git
Activate the plugin in the WordPress admin under Plugins.
Use the [wcl_dynamic_counter] shortcode in any post or page to display the counter.

## Usage
Shortcode: To display the counter, add [wcl_dynamic_counter] to the desired location within a post or page.
Settings Page: Access the Counter Settings page in the WordPress admin to manually set or reset the counter value.

## Admin Settings
The plugin provides a simple admin page where you can:

Set a custom starting value for the counter.
Reset the counter as needed.

## Code Overview
Cron-Based Increment
The plugin registers a custom cron schedule (every minute) and hooks into it to increment the counter by a random value (between 8 and 9). The updated value is saved in the WordPress options table, making it accessible across sessions.

## Shortcode Display
The [wcl_dynamic_counter] shortcode outputs the current counter value in HTML, styled with CSS and JavaScript files to display it dynamically.

## Files and Structure
wcl-dynamic-counter-update.php: Main plugin file with activation, deactivation, cron setup, and shortcode functions.
/js/wcl-counter.js: JavaScript for dynamic updates if needed.
/css/wcl-style.css: Basic styling for the counter display.

## License
This project is licensed under the GPL v3 or later - see the LICENSE file for details.

## Frequently Asked Questions
How do I add the counter to my site?
Use the [wcl_dynamic_counter] shortcode on any page or post where you want to display the counter.

Can I set a custom starting value?
Yes, go to the Counter Settings page in the WordPress admin dashboard to enter a custom value.

Does deactivating the plugin reset the counter?
No, the counter value is stored in the database and will persist across sessions. However, deactivating the plugin will stop the scheduled cron job until the plugin is reactivated.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with improvements or bug fixes.

## Author
Forkan Hossain
