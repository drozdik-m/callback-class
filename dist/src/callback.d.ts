/**
 * Callback class - Holds functions, that can be added and called
 */
export declare class Callback {
    private callbacks;
    private defaultFunction;
    constructor();
    /**
     * Adds a callback function - O(1)
     * @param item Function to add
     */
    Add(item: Function): void;
    /**
    * Checks if there are any added callbacks - O(1)
    * @returns True if there are no callbacks added
    */
    Empty(): boolean;
    /**
    * Removes all added functions - O(1)
    */
    Clear(): void;
    /**
    * Returns number of currently stored functions - O(1)
    * @returns Number of currently stored functions
    */
    Size(): number;
    /**
     * Executes all added functions  - O(n)
     * @param args Rest parameter
     */
    Execute(...args: any[]): void;
}
