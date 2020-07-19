
class Store 
{
    constructor()
    {
        this._url = 'http://api.jikan.moe/v3/schedule'
        this._store = null
        this._bookmark = null
    }


    async _syncBookmark()
    {
        this._bookmark = localStorage.getItem( 'bookmark' )
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


    async create()
    {
        if( !this._store && !localStorage['store'] )
            this._syncStore(true)

        if( !this._bookmark && !localStorage['bookmark'] )
        {
            localStorage.setItem( 'bookmark', [] )
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
     * @param {string} weekDay 
     */
    find( weekday )
    {
        let id = null
        let call = 0
        return new Promise( ( resolve, reject ) => {
            
            this.sync( 'store' )
            
            id = setInterval(() => {
                call++

                if( !!this._store )
                {
                    resolve( this._store[weekday] )   
                    clearInterval(id)
                }

                if( call === 10)
                {
                    clearInterval(id)
                    reject()
                }
            }, 1000)
        } )
    }


    /**
     * 
     * @param {string} key 
     * @param {string} data 
     */
    setBookmark( key, data )
    {
    }

    get store()
    {
        return this._store
    }


    get bookmark()
    {
        return this._bookmark
    }
}


let store = new Store()
    store.create()

export default store