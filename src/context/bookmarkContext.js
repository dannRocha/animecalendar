import React, { createContext, useState, useEffect, useContext } from 'react'
import { Store } from '../core/mod.js'


const BookmarkContext = createContext()


export default function BookmarkProvider( { children } )
{

	const [ dataBookmark, setDataBookmark ] = useState( [] )
	const store = new Store()

	function addOrRemoveBookmark( anime, action )
	{

		function _addBookmark()
		{
			store.addBookmark( anime.mal_id, anime )
			setDataBookmark( [...dataBookmark, anime] )	
		}

		function _removeBookmark()
		{
			store.removeBookmark(anime.mal_id)
			setDataBookmark( dataBookmark.filter( bookmark => bookmark.mal_id !== anime.mal_id ) )
		}
		
		function _toogle()
		{
		    if( store.bookmark?.hasOwnProperty( anime.mal_id ) )
		    	_removeBookmark()
		    else
		    	_addBookmark()
		}


		switch(action)
		{
			default: 
				_toogle(); break;
			case 'add':   
				 _addBookmark(); break;
			case 'remove': 
				_removeBookmark(); break;
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
