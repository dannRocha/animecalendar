import React, { useState, useEffect } from 'react'
import { useBookmark } from '../../../context/bookmarkContext.js'
import { SwipeableList, SwipeableListItem, ActionAnimations } from '@sandstreamdev/react-swipeable-list'
import { FaTrash as TrashIcon, FaPlusCircle as PlusCircleIcon } from 'react-icons/fa'

import Main, { Icon } from './style.js'
import Card from '../Card/Card.js'
import Loading from '../Loading/Loading.js'
import './swipeCustomStyle/index.css'


export default function ( { animes, subTitle }){

	const { addOrRemoveBookmark } = useBookmark()
	const [ loading, setLoading ] = useState(true)
	useEffect(() => {
		setLoading( !!animes?.lenght )
	}, [ animes ] )
    return (
        <Main>
            <header> {subTitle ?? 'subTitle'}</header>
            <section>
				{

					( loading )
						? <Loading delay={ 1 } /> 
						: (
							animes?.map( ( anime, index ) => 
								<SwipeableList>
									<SwipeableListItem
										swipeLeft={{
											content: <Icon ><PlusCircleIcon/><TrashIcon/></Icon>,
											actionAnimation: 
												( subTitle === 'Today' ) 
													? ActionAnimations.REMOVE
													: ActionAnimations.RETURN
											,
											action: () => {
												addOrRemoveBookmark( anime, 'remove' ) 
											}
										}}
										
										swipeRight={{
											content: <Icon ><PlusCircleIcon/><TrashIcon/></Icon>,
											actionAnimation: ActionAnimations.RETURN,
											action: () => { 
												addOrRemoveBookmark( anime, 'add' )
											}
										}}								
									>	
										<Card
											key = {`_@${anime?.mal_id + index}`} 
											anime = { anime } 
										/>
										
									</SwipeableListItem>
								</SwipeableList>
							) 
						)
				}
            </section>
        </Main>
    )
}
