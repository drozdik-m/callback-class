
/**
 * Callback class - Holds functions, that can be added and called
 * @author Martin Drozdík <info@bonsai-development.cz> (https://bonsai-development.cz/)
 */
export class Callback
{
    //--------------------------------------------------
    //----------VARIABLES-------------------------------
    //--------------------------------------------------
    //Array of callback functions
    private callbacks: Function[] = [];
    private defaultFunction: Function = function () { };


    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    constructor()
    {
        console.log("test");
    }

    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
     * Adds a callback function - O(1)
     * @param item Function to add
     */
    Add (item: Function)
    {
        this.callbacks.push(item);
    }

    /**
    * Checks if there are any added callbacks - O(1)
    * @returns True if there are no callbacks added
    */
    Empty(): boolean
    {
        return this.callbacks.length === 0;
    }

    /**
    * Removes all added functions - O(1)
    */
    Clear()
    {
        this.callbacks = [];
    }

    /**
    * Returns number of currently stored functions - O(1)
    * @returns Number of currently stored functions
    */
    Size(): number
    {
        return this.callbacks.length;
    }

    /**
     * Executes all added functions  - O(n)
     * @param args Rest parameter
     */
    Execute(...args: any[])
    {
        for (let i = 0; i < this.callbacks.length; i++)
            this.callbacks[i](...args);
    }
}


