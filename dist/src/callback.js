exports.__esModule = true;
exports.Callback = void 0;
/**
 * Callback class - Holds functions, that can be added and called
 */
var Callback = /** @class */ (function () {
    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    function Callback() {
        //--------------------------------------------------
        //----------VARIABLES-------------------------------
        //--------------------------------------------------
        //Array of callback functions
        this.callbacks = [];
        this.defaultFunction = function () { };
    }
    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
     * Adds a callback function - O(1)
     * @param item Function to add
     */
    Callback.prototype.Add = function (item) {
        this.callbacks.push(item);
    };
    /**
    * Checks if there are any added callbacks - O(1)
    * @returns True if there are no callbacks added
    */
    Callback.prototype.Empty = function () {
        return this.callbacks.length === 0;
    };
    /**
    * Removes all added functions - O(1)
    */
    Callback.prototype.Clear = function () {
        this.callbacks = [];
    };
    /**
    * Returns number of currently stored functions - O(1)
    * @returns Number of currently stored functions
    */
    Callback.prototype.Size = function () {
        return this.callbacks.length;
    };
    /**
     * Executes all added functions  - O(n)
     * @param args Rest parameter
     */
    Callback.prototype.Execute = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < this.callbacks.length; i++)
            (_a = this.callbacks)[i].apply(_a, args);
    };
    return Callback;
}());
exports.Callback = Callback;
