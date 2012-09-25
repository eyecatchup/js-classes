var Playable = (function () {   

    function Playable(title) {        
        this.title = title;
        this.log = [];
    }    

    /*
        Starts playback of the Movie or Episode.
    */
    Playable.prototype.play = function() {
        // Log playback
        this.log.unshift('Playing: ' + this.title);
    }
; return Playable;})();

var playable = new Playable('House of Cards');
playable.play();