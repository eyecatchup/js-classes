js-classes
==========

Dynamic class system vs. ES6 Harmony classes via Harmonizr

This project explores two approaches to classes in JavaScript:
- using a class system based on work from John Resig, base2, and Prototype.
- using ES6 (Harmony) sugar transpiled to JavaScript using Harmonizr


Project Structure
=================
Each folder represents an area of concern and contains an implementation using util.Class and an implementation using ES6 Harmony. For the latter, a transpiled file is also included so that it can be executed in current JavaScript VMs.


ES6 Harmony classes
===================
We're using Maximally Minimal Classes as outlined by TC39: http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes

To generate JavaScript, I'm using Harmonizr to transpile: https://github.com/jdiamond/harmonizr


Comparisons and JSPerf results
==============================
- define-instantiate-invoke: http://jsperf.com/simple-define-instantiate-invoke
- subclass-instantiate-super: http://jsperf.com/simple-subclass-instantiate
- getters-setters: http://jsperf.com/getters-setters

