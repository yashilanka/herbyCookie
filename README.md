herbyCookie
=====

 > An easy jQuery plugin asking at user for cookie allowing a website to comply with the EU cookie law.

Installation
====

Include the file
----

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>    // jQuery
    <script type="text/javascript" src="js/herbyCookie.min.js"></script>

Start the plugin
----

    $(document).ready(function(){
      $(document).herbyCookie({
        // Options
      });
    });

Personalize the options
----

    // This is set by default
    btnText: "Got it!",    // The text of the button
    policyText: "Privacy policy",    // The text of the link
    text: "We use cookies to ensure you get the best experience on our website, if you continue to browse you'll be acconsent with our",    // The text
    scroll: false,    // Accept on scroll?
    link: "/policy.html"    // The link to the policy

COPYRIGHT
====

herbyCookie is released under the [MIT License](https://opensource.org/licenses/MIT).

Copyright © Paolo Basso;
