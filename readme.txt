=== WCL Dynamic Counter Update ===
Contributors: ForkanHossain
Tags: counter, shortcode, cron, random increment, statistics
Requires at least: 5.6
Tested up to: 6.7
Requires PHP: 7.2
Stable tag: 1.0
Donate Link: https://wise.com/pay/me/mdforkanh
License: GPL v3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

A dynamic counter that increments by a random value every minute and saves it in the database for display.

== Description ==

**WCL Dynamic Counter Update** is a WordPress plugin designed to create a dynamic counter that updates itself by a random increment (8-9) every minute. The counter value is stored in the database and can be displayed anywhere on your website using a simple shortcode. Additionally, an admin settings page allows for manual reset of the counter.

### Key Features:
- **Automatic Increment**: The counter increases every minute by a random amount between 8 and 9.
- **Easy Display**: Use the `[wcl_dynamic_counter]` shortcode to place the counter on any page or post.
- **Customizable Starting Value**: Admins can manually set the counter value via the settings page.
- **Lightweight and Efficient**: Runs on a one-minute custom cron job for minimal performance impact.

== Installation ==

1. Upload the `wcl-dynamic-counter-update` folder to the `/wp-content/plugins/` directory or install the plugin through the WordPress Plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Use the `[wcl_dynamic_counter]` shortcode on any page or post where you want to display the counter.
4. Go to **Counter Settings** in the WordPress admin menu to manually set or reset the counter value.

== Frequently Asked Questions ==

= How do I display the counter? =
Use the `[wcl_dynamic_counter]` shortcode in the content editor of any page or post.

= Can I set a custom starting value for the counter? =
Yes, go to the **Counter Settings** page in the WordPress admin and enter a custom value.

= What happens if I deactivate the plugin? =
The scheduled event that updates the counter is automatically cleared when you deactivate the plugin.

== Changelog ==

= 1.0 =
* Initial release with automatic counter increment and admin settings page for manual reset.

== Usage ==

To display the counter on a page or post, add the following shortcode:
`[wcl_dynamic_counter]`

== License ==

This plugin is licensed under the GPL v3 or later. See the license text at https://www.gnu.org/licenses/gpl-3.0.html.