import React, { useState, useEffect } from 'react'
import Card from '../Card/Card.js'
import Main, { Icon } from './style.js'
import { useBookmark } from '../../../context/bookmarkContext.js'
import { SwipeableList, SwipeableListItem, ActionAnimations } from '@sandstreamdev/react-swipeable-list'
import { FaTrash as TrashIcon, FaPlusCircle as PlusCircleIcon } from 'react-icons/fa'
import styled from 'styled-components'
import './swipeCustomStyle/index.css'

const LoadingStyle = styled.div`

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	width: 150px;
	height: 150px;
	background: transparent;
	border: 3px solid #3c3c3c;
	border-radius: 50%;
	text-align: center;
	line-height: 150px;
	/* font-family: sans-serif; */
	font-size: 20px;
	font-weight: bold;
	color: var(--_3-color);
	letter-spacing: 4px;
	text-transform: uppercase;
	/* text-shadow: 0 0 10px  #f00; */
	/* box-shadow: 0 0 20px rgba(0,0,0, .5); */

	:before {

		content: '';
		position: absolute;
		top: -3px;
		left: -3px;
		width: 100%;
		height: 100%;
		border: 3px solid transparent;
		border-top: 3px solid var(--_2-color);
		border-right: 3px solid var(--_2-color);
		border-radius: 50%;
		animation: animeCircle ${({ delay }) => delay ?? 2}s linear infinite;	
	}

	span {

		display: block;
		position: absolute;
		top: calc(50% - 2px);
		left: 50%;
		width: 50%;
		height: 4px;
		background: transparent;
		transform-origin: left;
		animation: animate ${({ delay }) => delay ?? 2}s linear infinite;
	}

	span:before {
		
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--_2-color);
		top: -6px;
		right: -8px;
		/* box-shadow: 0 0 20px var(--_2-color); */

	}

	@keyframes animate {
		
		0%{
			transform: rotate(45deg);
		}
		100%
		{
			transform: rotate(405deg);
		}
	}

	@keyframes animeCircle {
		
		0%{
			transform: rotate(0deg);
		}
		100%
		{
			transform: rotate(360deg);
		}
	}

`

function Loading( { text, delay, status } )
{
	return (
		<LoadingStyle delay = { delay } >
			{text ?? 'Loading'}
			<span></span>
		</LoadingStyle>
	)
}

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
						? <Loading delay={ 2 } /> 
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
