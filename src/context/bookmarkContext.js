import React, { createContext, useState, useEffect, useContext } from 'react'
import store from '../core/mod.js'


const BookmarkContext = createContext()


export default function BookmarkProvider( { children } )
{

	const [ dataBookmark, setDataBookmark ] = useState( [] )

	function addOrRemoveBookmark( anime )
	{

		if( store.bookmark?.hasOwnProperty( anime.mal_id ) )
		{
			store.removeBookmark(anime.mal_id)
			setDataBookmark( dataBookmark.filter( bookmark => bookmark.mal_id !== anime.mal_id ) )
		}
		else
		{
			store.addBookmark( anime.mal_id, anime )
			setDataBookmark( [...dataBookmark, anime] )	
		}

	}

	useEffect(() => {
			var data = Object.entries( store.bookmark )
				?.flat()
				.filter(item => !Number.isInteger( Number.parseInt(item) ) ) 
					        
			setDataBookmark( data )
		
	}, []  )

	return (
		<BookmarkContext.Provider value = { { dataBookmark, addOrRemoveBookmark } } >
			{ children }
		</BookmarkContext.Provider>
	)
}

export function useBookmark()
{
	const context = useContext( BookmarkContext )

	const { dataBookmark, addOrRemoveBookmark } = context

	return {
		dataBookmark, addOrRemoveBookmark
	}
}
