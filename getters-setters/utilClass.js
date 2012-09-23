var Playable = util.Class.create({

    log: [],

    get title() {
        return this._title;
    },

    set title(newTitle) {
        this._title = newTitle;
    },

    init: function(title) {
        this.title = title;
    },

    play: function() {
        this.log.unshift('Playing: ' + this.title);
    }    

});

var playable = new Playable('House of Cards');
playable.play();