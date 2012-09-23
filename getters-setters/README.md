es6-transpiled.min
==================
- Google Closure Compiler succeeds with ADVANCED_OPTIMIZATIONS turned on. 


utilClass.min
=============
- Google Closure Compiler fails to minimize when using ADVANCED_OPTIMIZATIONS with these errors:

utilClass.js:1: ERROR - Parse error. getters are not supported in older versions of JS. If you are targeting newer versions of JS, set the appropriate language_in option.
var Playable = util.Class.create({
^

utilClass.js:1: ERROR - Parse error. setters are not supported in older versions of JS. If you are targeting newer versions of JS, set the appropriate language_in option.
var Playable = util.Class.create({
^

2 error(s), 0 warning(s)


utilClass.min-simple.js
=======================
- Google Closure Compiler fails to minify when not using ADVANCED_OPTIMIZATIONS
- same errors as with ADVANCED_OPTIMIZATIONS