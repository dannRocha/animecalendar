import React, { createContext, useState, useEffect, useContext } from 'react'
import { Store } from '../core/mod.js'


const GlobalContext = createContext()


export default function GlobalProvider( { children } )
{

	const [ globalData, setGlobalData ] = useState( {} )
	const store = new Store()


	useEffect(() => {

        async function load()
        {
            let data = await store.findAll()
            let parse = {}

                data = Object.entries(data).slice(3).flat()

            for( let key in data )
            {
                if( typeof data[ key ] !== 'string' )
                    continue

                parse[data[ key ]] = data[parseInt(key) + 1]
            }

            
            setGlobalData( parse )
            console.log( globalData )            
        }


        load()

    }, [])

	return (
		<GlobalContext.Provider value = { { globalData, setGlobalData } } >
			{ children }
		</GlobalContext.Provider>
	)
}

export function useGlobal()
{
    const context = useContext( GlobalContext )
    

	const { globalData, setGlobalData } = context
    
    console.log('globalData' )
    console.log(globalData )


	return {
		globalData, setGlobalData
	}
}
