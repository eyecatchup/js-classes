var Playable = (function () {
    function Playable(title) {
        this.title = title;
        this.log = [];
    }
    Object.defineProperty(Playable.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle;
        },
        enumerable: true,
        configurable: true
    });
    Playable.prototype.play = function () {
        this.log.unshift('Playing: ' + this.title);
    };
    return Playable;
})();
var playable = new Playable('House of Cards');
playable.play();
