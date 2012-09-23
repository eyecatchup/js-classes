var Playable = util.Class.create({
    
    init: function(title) {
        this.title = title;
        this.log = [];
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