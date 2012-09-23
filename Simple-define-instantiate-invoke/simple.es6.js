class Playable {   

    constructor(title) {        
        this.title = title
    }    

    play() {
        this.log.unshift('Playing: ' + this.title);
    }
}

Playable.prototype.title = '';
Playable.prototype.log = [];

var playable = new Playable('House of Cards');
playable.play();