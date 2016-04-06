//build a page with a simple search form that allows the user to search YouTube videos.
//Based on search results, page will display thumbnail images of videos that match the search.


$(function () {
    $("#keywords-input-form").submit(function (event) {
        event.preventDefault();
        var addKeywords = $("#add-keywords").val();
        getVideos(addKeywords);

    });

    function getVideos(addKeywords) {
        var params = {
            part: "snippet",
            key: "AIzaSyBgEpIxrEBtyY88B-dPz_6NknNvA3IBlsk",
            q: addKeywords,
            maxResults: 8,
            type: "video"
        };
        var url = 'https://www.googleapis.com/youtube/v3/search';
        $.getJSON(url, params, function (data) {
            if (data.pageInfo.totalResults == 0) {
                alert("No videos with your keywords found.");
            }
            showThumbnails(data.items);
            $("#keywords-input-form").val();

        });
    }

    function showThumbnails(videos) {
        var videosFound = "";
        $.each(videos, function (index, video) {
            videosFound += "<li><p>" + video.snippet.title + "</p><a href='https://www.youtube.com/watch?v=" + video.id.videoId + "' target='_blank'><img src='" + video.snippet.thumbnails.default.url + "'/></a></li>";
        });
        $('#found-videos ul').html(videosFound);
    }

});
