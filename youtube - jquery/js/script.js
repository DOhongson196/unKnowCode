$(document).ready(function () {
    var modal = $('#myModal');
    
    var span = $(".close")[0];
    
    var videoFrame = $("#video-frame");
    
    var inputSearch = $("#keyword");

    $(inputSearch).keydown(function (e) {
        if (e.keyCode == 13){
            loadVideo(this.value);
        } 
        
    });
    loadVideo("mono");

    $(span).click(function (e) { 
        e.preventDefault();
        closeVideo();
    });

    $(window).click(function (e) { 
        e.preventDefault();
        if (e.target == modal) {
            closeVideo();
        }
        
    });
    
    
    function loadVideo(keyword){
        $.get("https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyDaR_U9ruoA-BLSaGBNyf4DTPGxAixftXA",
            function (api) {
                var htmlContent = "";

            for (var i=0; i < api.items.length;i++){
                if(api.items[i].id.kind == 'youtube#channel'){
                    continue;
                }
                var videoId = api.items[i].id.videoId;
                var videoTitle = api.items[i].snippet.title;
                var videoThumbnail = api.items[i].snippet.thumbnails.medium.url;
                htmlContent += '<div class="video" id = "'+ videoId +'">'
                htmlContent += '<img " src="' + videoThumbnail + '">'
                htmlContent += '<div class="title">' +  videoTitle + '</div>'
                htmlContent += '</div>'
            }
            $('#list-video').html(htmlContent);
            for (var i=0; i < api.items.length;i++){ 
                const id = '#' + api.items[i].id.videoId;
                const value = api.items[i].id.videoId;
                $(id).click(function (e) {
                    showVideo(value);
                });
            }
            
            },
        );

    }


    
    function closeVideo(){
        $(modal).css('display', 'none');
        $(videoFrame).attr('src', '');
    }

    
    function showVideo(videoId){
        $(videoFrame).attr('src', "https://www.youtube.com/embed/" + videoId + "?autoplay=1");
        setTimeout(function(){
           $(modal).css('display', 'block');
        }, 300);
    }
});