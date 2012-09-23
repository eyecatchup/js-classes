var Playable = util.Class.create({
    title: '',
    log: [],

    init: function(title) {
        this.title = title;
    },

    play: function() {
        this.log.unshift('Playing: ' + this.title);
    }
});

var TVShow = Playable.extend({
    play: function() {
        this._super();        
    }
});

var show = new TVShow('House of Cards');
show.play();