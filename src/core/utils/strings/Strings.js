export default class Strings {
    constructor(){}

    /**
     * 
     * @param {string} string 
     */
    static capitalize( string )
    {
        if( typeof string !== 'string' || !string )
            throw new TypeError('Strings.capitalize expects a string as a parameter')
        

        return string.replace(/^\w/, l => l.toUpperCase() )
    }
}