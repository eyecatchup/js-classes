var ES6Playable = (function () {function ES6Playable() {};

    /** @expose */
    ES6Playable.prototype.performAction = function() {
        this.acted = true;
    }
; return ES6Playable;})();

var es6Playable = new ES6Playable()
