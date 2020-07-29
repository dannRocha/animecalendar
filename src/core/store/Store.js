
export default class Store 
{
    constructor()
    {
		// Singleton
    	if ( !!Store.instance )
			return Store.instance
		
	    Store.instance = this
	    
        this._url = 'http://api.jikan.moe/v3/schedule'
        this._store = null
        this._bookmark = null

        this._create()

        return this
    }


    async _syncBookmark()
    {
        this._bookmark = JSON.parse( localStorage.getItem( 'bookmark' ) )
    }


    async _syncStore( force = false )
    {
        if( force )
        {
            this._store = await fetch(this._url).then( data => data.json() )
            localStorage.setItem( 'store', JSON.stringify( this._store ) ) 
            console.log('Request')  
        }
        else
        {
            this._store = JSON.parse( localStorage.getItem('store') )
        }
    }


    async _create()
    {
        if( !this._store && !localStorage['store'] )
            this._syncStore(true)

        if( !this._bookmark && !localStorage['bookmark'] )
        {
            localStorage.setItem( 'bookmark', '{}' )
            this._syncBookmark()
        }
    }


    async update()
    {
    }


    /**
     * 
     * @param {string} who 
     */
    async sync(who)
    {
        switch ( who )
        {
            default:
                this._syncBookmark()
                this._syncStore()
                break
            case 'bookmark':
                this._syncBookmark()
                break
            case 'store': 
                this._syncStore()
                break
        } 
    }
    

    /**
     * 
     * @param {string} weekday 
     */
    async find( weekday )
    {
        this.sync()

        if( !!this._store )
            return this._store[weekday] 

        return new Promise( ( resolve, reject ) => {
        
            let id = setInterval( () => {
                if( !!this._store )
                {
                    resolve( this._store[weekday] )   
                    clearInterval(id)
                }

            }, 100)
        } )
    }

    async findAll()
    {
        this.sync()

        if( !!this._store )
            return this._store 

        return new Promise( ( resolve, reject ) => {
        
            let id = setInterval( () => {
                if( !!this._store )
                {
                    resolve( this._store )   
                    clearInterval(id)
                }

            }, 100)
        } )
    }


    /**
     * 
     * @param {string} key 
     * @param {string} data 
     */
    addBookmark( key, data )
    {
    	this.sync('bookmark')
    	this._bookmark[key] =  data
    	localStorage.setItem('bookmark', JSON.stringify( this._bookmark ) )
    }

    removeBookmark(key)
    {
    	this.sync('bookmark')
    	delete this._bookmark[key]
    	localStorage.setItem('bookmark', JSON.stringify( this._bookmark ) )
    }

    get store()
    {
        return this._store
    }


    get bookmark()
    {
		this._syncBookmark()

		return this._bookmark

    }
}
