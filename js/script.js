$(document).ready(function(){
    $(document).herbyCookie({
        style: "dark",
        btnText: "Got it!",
        policyText: "Privacy policy",
        text: "We use cookies to ensure you get the best experience on our website, if you continue to browse you'll be acconsent with our",
        scroll: false,
        link: "/policy.html"
    });
    localStorage.clear();
});
