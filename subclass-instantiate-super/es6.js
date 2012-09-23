class Playable {
    constructor(title) {        
        this.title = title;
        this.log = [];
    }    

    play() {        
        this.log.unshift('Playing: ' + this.title);
    }
}

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