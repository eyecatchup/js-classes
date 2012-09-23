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


class TVShow extends Playable {
    constructor(title) {
        super(title);
    }

    play() {
        super.play();
    }
}

var show = new TVShow('House of Cards');
show.play();