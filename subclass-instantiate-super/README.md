e6-transpiled.min.js
====================
- Google Closure Compiler with ADVANCED_OPTIMIZATIONS turned on. 



utilClass.min.js
================
- Google Closure Compiler with ADVANCED_OPTIMIZATIONS yields 5 warnings (below)
- code fails to execute

utilClass.js:4: WARNING - dangerous use of the global this object
        this.title = title;
        ^

utilClass.js:5: WARNING - dangerous use of the global this object
        this.log = [];
        ^

utilClass.js:9: WARNING - dangerous use of the global this object
        this.log.unshift('Playing: ' + this.title);
        ^

utilClass.js:9: WARNING - dangerous use of the global this object
        this.log.unshift('Playing: ' + this.title);
                                       ^

utilClass.js:15: WARNING - dangerous use of the global this object
        this._super();        
        ^

0 error(s), 5 warning(s)