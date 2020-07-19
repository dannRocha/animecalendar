export default class Strings {
    constructor(){}

    /**
     * 
     * @param {string} string 
     */
    static capitalize( string )
    {
        return string.replace(/^\w/, l => l.toUpperCase() )
    }
}