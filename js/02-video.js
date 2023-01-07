import "../node_modules/@vimeo/player";
console.log('HELLO1')

    const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!')
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title)
    });

    const onPlay = function(currentTime) {
        localStorage.setItem("videoplayer-current-time", currentTime)
        // data is an object containing properties specific to that event
    };
    
    player.on('timeupdate', onPlay);

    player.setCurrentTime(30.456).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
