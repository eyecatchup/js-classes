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


var TVShow = (function () {var TVShow__super = Playable;var TVShow__prototype = (typeof TVShow__super !== "function" ? TVShow__super : TVShow__super.prototype);TVShow.prototype = Object.create(TVShow__prototype); 
    function TVShow(title) {
        TVShow__super.bind(this)(title);
    }

    TVShow.prototype.play = function() {
        TVShow__prototype.play.bind(this)();
    }
; return TVShow;})();

var show = new TVShow('House of Cards');
show.play();