/*
* herbyCookie jQuery plugin v1.0
*
* DANGER: this is a specific version for a demo then use herbyCookie.js (https://github.com/paolobasso99/herbyCookie)
*
* An easy jQuery plugin asking at user for cookie allowing a website to comply with the EU cookie law.
*
* Copyright (c) 2015 Paolo Basso
* https://github.com/paolobasso99/herbyCookie
* Licensed under the MIT license
*/
(function ( $ ) {
 
    $.fn.herbyCookieDemo = function( options ) {
 
        // Options
        var settingsDemo = $.extend({
            style: "dark",
            btnText: "Got it!",
            policyText: "Privacy policy",
            text: "We use cookies to ensure you get the best experience on our website, if you continue to browse you'll be acconsent with our",
            scroll: false,
            link: "/policy.html"
        }, options );
        
        // Html
        var herbyHtmlDemo = "<div class='herbyCookieConsentDemo herbyIn'><p>"+settingsDemo.text+" "+"<a alt='"+settingsDemo.policyText+"' href='"+settingsDemo.link+"' target='_blank'>"+settingsDemo.policyText+"</a>.</p><a alt='"+settingsDemo.btnText+"' class='herbyBtnDemo'>"+settingsDemo.btnText+"</a></div>";
        
        // Different style set up
        if(settingsDemo.style == "light"){
            var color = "#424242";
            var bg = "#fff"
        } else {
            var color = "#fff"
            var bg = "#222"
        };
        
        //CSS
        var herbyCssDemo = "<!-- Demo CSS -->"+'<style>@-webkit-keyframes herbyIn{from{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes herbyIn{from{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.herbyIn{-webkit-animation-name:herbyIn;animation-name:herbyIn}@-webkit-keyframes herbyOut{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}@keyframes herbyOut{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}.herbyOut{-webkit-animation-name:herbyOut;animation-name:herbyOut}.herbyCookieConsentDemo{position:relative;bottom:0;overflow:hidden;width:100%;background:'+bg+' none repeat scroll 0 0;color:'+color+';box-sizing:border-box;padding:15px 20px;vertical-align:bottom;z-index:999;display:inline-block;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.herbyCookieConsentDemo p{display:inline-block;vertical-align:middle;font-size:1em;width:80%;float:left;font-family:"Helvetica Neue Light","HelveticaNeue-Light","Helvetica Neue","Calibri","Helvetica","Arial";margin-top:.7em}.herbyCookieConsentDemo p a{color:#31a8f0;vertical-align:middle;font-size:1em}.herbyCookieConsentDemo .herbyBtnDemo{float:right;font-size:1em;text-decoration:none;border-bottom:1px solid #b0b0b0;border-top:none;border-left:none;border-right:none;text-align:center;padding:10px 8px 9px 8px;cursor:pointer;cursor:hand;line-height:21px !important;position:relative;border-radius:5px;border-bottom-width:3px;overflow:hidden;display:inline-block;word-wrap:break-word;background-color:#d32d27;color:#fff;border-color:#af0806;font-size:20px;padding-left:10px;padding-right:10px;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;-webkit-tap-highlight-color:rgba(255,255,255,0);tap-highlight-color:rgba(255,255,255,0)}.herbyCookieConsentDemo .herbyBtnDemo:hover{background-color:#c22a24;border-color:#910101;color:#fff;text-decoration:none;outline:none}.herbyCookieConsentDemo .herbyBtnDemo:focus{text-decoration:none;outline:none}.herbyCookieConsentDemo .herbyBtnDemo:active{background-color:#af0806;border-color:#af0806;color:#fff;padding-top:13px;padding-bottom:6px}@media all and (max-width:1000px){.herbyCookieConsentDemo p{width:66%;font-size:.8em}.herbyCookieConsentDemo .herbyBtnDemo{padding:9px 8px 8px 8px}.herbyCookieConsentDemo .herbyBtnDemo:active{padding-top:12px;padding-bottom:5px}}@media all and (max-width:500px){.herbyCookieConsentDemo{text-align:center}.herbyCookieConsentDemo p{width:100%;float:none;text-align:left;font-size:.7em}.herbyCookieConsentDemo .herbyBtnDemo{float:none;margin-top:10px;padding:6px 8px 5px 8px}.herbyCookieConsentDemo .herbyBtnDemo:active{padding-top:9px;padding-bottom:2px}}</style>';
        
        // Open functions
        var herbyStorageDemo = "herbyCookieDemo"+"_"+window.location.hostname;
        var herbyConsentDemo = localStorage.getItem(herbyStorageDemo);
        $(this).append(herbyHtmlDemo), $(this).append("<div class='herbyCss'>"+herbyCssDemo+"</div>");
        
        
        // Close functions
        $(".herbyBtnDemo").click(closeHerbyDemo);
        
        function closeHerbyDemo() {
            $(".herbyCookieConsentDemo").removeClass("herbyIn").addClass("herbyOut");
            localStorage.setItem(herbyStorageDemo, "accept");
            setTimeout(
                function() {
                    $(".herbyCookieConsentDemo").remove();
                },
            1001);
        };
        
    };
    
}(jQuery));
