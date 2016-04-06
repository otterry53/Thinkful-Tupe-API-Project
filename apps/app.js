//build a page with a simple search form that allows the user to search YouTube videos.
//Based on search results, page will display thumbnail images of videos that match the search.


//http://i3.ytimg.com/vi/<insert-youtube-video-id-here>/default.jpg

$(document).ready(function () {
    $("#keywords-input-form").submit(function (event) {
        event.preventDefault();
        getVideos($("#add-keywords").val());

    });

    function getVideos(query) {
        $.getJSON('https://www.googleapis.com/youtube/v3/search', {
                part: "snippet",
                key: "AIzaSyBgEpIxrEBtyY88B-dPz_6NknNvA3IBlsk",
                q: query,
                maxResults: 8,
                type: "video"
            },
            function (data) {
                if (data.pageInfo.totalResults == 0) {
                    alert("No videos with your keywords found.");
                }
                showThumbnails(data.items);

            }
        );
    }

    function showThumbnails(videos) {
        var videosFound = "";
        $.each(videos, function (index, video) {
            videosFound += "<li><p>" + video.snippet.title + "</p><a href='https://www.youtube.com/watch?v=" + video.id.videoId + "' target='_blank'><img src='" + video.snippet.thumbnails.default.url + "'/></a></li>";
        });
        $('#found-videos ul').html(videosFound);
    }

    $('.newSearch').click(function () {
        $('#add-keywords').empty();
        $('#found-videos').val();


    });
});
