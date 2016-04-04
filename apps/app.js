//build a page with a simple search form that allows the user to search YouTube videos.
//Based on search results, page will display thumbnail images of videos that match the search.


//http://i3.ytimg.com/vi/<insert-youtube-video-id-here>/default.jpg

$(function () {
$('#input-form').on("click", function (event) {
event.preventDefault();
getVideos = $('#addKeywordsValue').val();
});

function getVideos(keywords) {
var params = {
part: "snippet",
key: "AIzaSyBgEpIxrEBtyY88B-dPz_6NknNvA3IBlsk",
q: keywords,
r: 'json',
type: "video"
};
url = 'https://www.googleapis.com/youtube/v3/search';
$.getJSON(url, params, function (data) {
/*if (data.Search == 0) {
alert("No videos with your keywords found.");
} else {*/
showResults(data.items);
});
}

function showResults(thumbs) {
var videosfound = " ";
$.each(thumbs, function (index, thumbs) {
html += '<li></p>' + thumbs.snippet.title + " " + thumbs.snippetthumbnails.default.url + '</p></li>';
});
$('#search-results ul').html(videosfound);
}
});
