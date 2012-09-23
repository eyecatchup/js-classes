var Playable = (function () {

    var __old_title = Object.getOwnPropertyDescriptor(Playable.prototype, "title"); Object.defineProperty(Playable.prototype, "title", {configurable: true, set: __old_title && __old_title.set, get: function() {
        return this._title;
    }})

    var __old_title = Object.getOwnPropertyDescriptor(Playable.prototype, "title"); Object.defineProperty(Playable.prototype, "title", {configurable: true, get: __old_title && __old_title.get, set: function(newTitle) {
        this._title = newTitle;
    }})

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