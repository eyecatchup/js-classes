var Playable = (function () {   

    function Playable(title) {        
        this.title = title
    }    

    Playable.prototype.play = function() {
        this.log.unshift('Playing: ' + this.title);
    }
; return Playable;})();

Playable.prototype.title = '';
Playable.prototype.log = [];

var playable = new Playable('House of Cards');
playable.play();