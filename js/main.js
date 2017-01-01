var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
var xmlhttpObject = new XMLHttpRequest();
xmlhttpObject.open('GET', url);
xmlhttpObject.send();
xmlhttpObject.addEventListener('load', function(e) {
    var input = e.target.response;
    pushtoDom(input);
});

function pushtoDom(input) {
    var response = JSON.parse(input);
    var i = 0;

    function tvShow() {
        myVar = setTimeout(function() {
            embedImage(i);
        }, 2000);
    }

    function embedImage() {
        src = response.data[i].images.fixed_height.url;
        jai = "<img src =" + src + ">";
        document.querySelector('.tvshow').innerHTML = jai;
        i++;
        if (i === 24) { i = 0; }
        tvShow();
    }

    tvShow();
}
