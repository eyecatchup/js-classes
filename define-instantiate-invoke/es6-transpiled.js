var Playable = (function () {   

    function Playable(title) {        
        this.title = title;
        this.log = [];
    }    

    Playable.prototype.play = function() {
        this.log.unshift('Playing: ' + this.title);
    }
; return Playable;})();

var playable = new Playable('House of Cards');
playable.play();