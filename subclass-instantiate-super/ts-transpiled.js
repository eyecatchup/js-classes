var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Playable = (function () {
    function Playable(title) {
        this.title = title;
        this.log = [];
    }
    Playable.prototype.play = function () {
        this.log.unshift('Playing: ' + this.title);
    };
    return Playable;
})();
var TVShow = (function (_super) {
    __extends(TVShow, _super);
    function TVShow(title) {
        _super.call(this, title);
    }
    TVShow.prototype.play = function () {
        _super.prototype.play.call(this);
    };
    return TVShow;
})(Playable);
var show = new TVShow('House of Cards');
show.play();

