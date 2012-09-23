var Playable = util.Class.create({    

    init: function(title) {
        this.title = title;
        this.log = [];
    },

    play: function() {
        this.log.unshift('Playing: ' + this.title);
    }    

});

var playable = new Playable('House of Cards');
playable.play();