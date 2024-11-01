=== WSSP ===
Contributors: bearice
Donate link: http://blog.icybear.net
Tags: akagaka,greendam
Requires at least: 2.9
Tested up to: 2.9.2
Stable tag: 0.3.6

WordPress Ukagaka Plugin

== Description ==
WSSP is a plugin that adds two [Ukagaka](http://en.wikipedia.org/wiki/Ukagaka) to your wordpress.

== Installation ==
1. Upload to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Change your ukagaka in WSSP Option page if you had installed it.

== Frequently Asked Questions ==
= How to make my own ukagaka =
1. You need 2 png pictures,resize it to whatever you want.
1. Create a new dir `/wp-content/plugins/wssp/ukagaka/<whatever>` then copy your pictures here.
1. Write a `index.php` like this:
<pre>
&lt;?php
$info = array(
    name=&gt;"Your akagaka's name",
    shell_left=&gt;"whatever1.png",
    shell_right=&gt;"whatever2.png",
    ghost=&gt;"ghost.json"
);
?&gt;
</pre>
1. Write a ghost.json. please refer to the one give along with the plugin.
== Screenshots ==
1. The Ukagaka is under this page

== Changelog ==
= 0.3.5 =
extendes admin pages
= 0.3.4 =
fixed install bugs
= 0.3 =
refactroy javascripts


== Upgrade Notice ==
Nothing.
