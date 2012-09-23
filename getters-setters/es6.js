class Playable {

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    constructor(title) {
        this.title = title;
        this.log = [];
    }

    play() {
        this.log.unshift('Playing: ' + this.title);
    }
}

var playable = new Playable('House of Cards');
playable.play();