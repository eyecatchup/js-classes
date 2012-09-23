var util = {};

/**
 * @class util.Class Provides simple class creation and inheritance
 * 
 * Based on work from John Resig, base2, and Prototype. Class uses namespace
 * safe method access allowing renaming of util.Class.
 *
 * Create an empty Class:
 *
 * var MyEmptyClass = util.Class.create();
 *
 * Create a typical Class instance:
 *
 * var MyClass = util.Class.create({
 *     init: function () {
 *         // This method serves as the constructor
 *     },
 *     aPrototypeMethod: function () {
 *         // All methods and properties are assigned to MyClass.prototype
 *     }
 * });
 *
 * Extend a Class instance:
 *
 * var YourClass = MyClass.extend({
 *     init: function () {
 *         // Base class properties are overwritten. Base methods can be invoked
 *         // using the _super() method.
 *         this._super();
 *     }
 * });
 * 
 */

(function(){

    var _hasSuper = /\b_super\b/,
        _doNotInit = {};
    
    /**
     * Enables sub classed methods to call their associated super class method
     * using `this._super()`.  Returns a function which executes in the scope
     * of a Class instance.
     * @param 
     * @param
     * @returns {Function}
     * @private
     */
    function _bindSuper (value, superValue) {
        
        // A _super() method is bound temporarily (created then destroyed) each
        // time a subclassed method is run.
        
        return function () {
            var tmp = this._super,
                ret;
    
            this._super = superValue;

            ret = value.apply(this, arguments);
            
            // The method only need to be bound temporarily, so it is removed
            // after the subclass method has executed.

            if (tmp) {
                this._super = tmp;
            } else {
                delete this._super;
            }
            
            return ret;
        };
    }
    
    /**
     * Extends a Class instance with properties to create a sub-class. Executes
     * in scope of a Class instance.
     * @public
     * @param {Object} props Object descriptor with key/value pairs
     * @returns {Function} A Class instance
     */
    function _extend (props) {
        var prototype = new this(_doNotInit),
            name, getter, setter, value
        ;
        
        // Copy the properties over onto the new prototype
        for (name in props) {
            getter = props.__lookupGetter__(name);
            setter = props.__lookupSetter__(name);

            if (getter || setter) {
                getter && prototype.__defineGetter__(name, getter);
                setter && prototype.__defineSetter__(name, setter);
            } else {
                value = props[name];
                if (typeof value === "function" && _hasSuper.test(value)) {
                    // value: sub-class method
                    // this.prototype[name]: this class' (super class) method
                    value = _bindSuper(value, this.prototype[name] || function(){});
                }
                prototype[name] = value;
            }
        }
        
        return _create(prototype);
    }

    /**
     * Creates a new Class instance, optionally including a prototype
     * object.  This method is not applied to returned Class instances;
     * use Class.extend to sub-class Class instances.
     * @public
     * @param {Object} props Object descriptor with key/value pairs
     * @returns {Function} A Class instance
     */
    function _create (props) {
        var Class = function () {
            var init = this.init;
            
            // All construction is actually done in the init method
            if (init && arguments[0] !== _doNotInit) {
                init.apply(this, arguments);
            }
        };
        
        // Populate our constructed prototype object
        if (props) {
            Class.prototype = props;
        }
        
        // Enforce the constructor to be what we expect
        Class.constructor = Class;
        
        // And make this class extendable
        Class.extend = _extend;

        return Class;
    }

    // Reveal _class publically

    util.Class = {
        create: _create
    };
    
}());