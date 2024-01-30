 document.addEventListener('DOMContentLoaded', function() {
            // Get the video element
            var video = document.getElementById('video');

            // Check if the video element is found
            if (video && typeof video.play === 'function') {
                // Delay the video playback by 3000 milliseconds (3 seconds)
                setTimeout(function() {
                    video.play();
                }, 3000);
            } else {
                console.error('Video element not found or play method not supported.');
            }
        });