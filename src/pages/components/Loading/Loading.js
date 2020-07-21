import React from 'react'
import LoadingStyle from './style.js'


export default function Loading( { text, delay, status } )
{
	return (
		<LoadingStyle delay = { delay } >
			{text ?? 'Loading'}
			<span></span>
		</LoadingStyle>
	)
}