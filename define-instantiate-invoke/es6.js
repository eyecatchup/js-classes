class Playable {   

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