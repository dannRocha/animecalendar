import React from 'react'
import Card from '../Card/Card.js'
import Main, { Icon } from './style.js'
import { useBookmark } from '../../../context/bookmarkContext.js'
import { SwipeableList, SwipeableListItem, ActionAnimations } from '@sandstreamdev/react-swipeable-list'
import { FaTrash as TrashIcon, FaPlusCircle as PlusCircleIcon } from 'react-icons/fa'
import styled from 'styled-components'
import './swipeCustomStyle/index.css'




export default function ( { animes, subTitle }){

	const { dataBookmark, addOrRemoveBookmark } = useBookmark()
	
    return (
        <Main>
            <header> {subTitle ?? 'subTitle'}</header>
            <section>
                {animes?.map( ( anime, index ) => 
                	<SwipeableList>
                		<SwipeableListItem
							swipeLeft={{
								content: <Icon ><PlusCircleIcon/><TrashIcon/></Icon>,
								actionAnimation: ActionAnimations.REMOVE,
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
                }
            </section>
        </Main>
    )
}
