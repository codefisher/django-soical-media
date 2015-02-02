var API_URL = "http://cdn.api.twitter.com/1/urls/count.json",
    TWEET_URL = "https://twitter.com/intent/tweet";
     
$(".tweet").each(function() {
    var elem = $(this),
    // Use current page URL as default link
    url = encodeURIComponent(elem.attr("data-url") || document.location.href),
    // Use page title as default tweet message
    text = elem.attr("data-text") || document.title,
    via = elem.attr("data-via") || "",
    related = encodeURIComponent(elem.attr("data-related")) || "",
    hashtags = encodeURIComponent(elem.attr("data-hashtags")) || "";
     
    // Set href to tweet page
    elem.attr({
        href: TWEET_URL + "?hashtags=" + hashtags + "&original_referer=" +
                encodeURIComponent(document.location.href) + "&related=" + related +
                "&source=tweetbutton&text=" + text + "&url=" + url + "&via=" + via,
        target: "_blank"
    });
     
    // Get count and set it as the inner HTML of .count
    $.getJSON(API_URL + "?callback=?&url=" + url, function(data) {
        elem.find(".count").html(data.count);
    });
});
