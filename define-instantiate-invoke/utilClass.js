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

var playable = new Playable('House of Cards');
playable.play();