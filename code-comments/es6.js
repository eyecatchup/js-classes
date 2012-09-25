class Playable {   

    constructor(title) {        
        this.title = title;
        this.log = [];
    }    

    /*
        Starts playback of the Movie or Episode.
    */
    play() {
        // Log playback
        this.log.unshift('Playing: ' + this.title);
    }
}

var playable = new Playable('House of Cards');
playable.play();