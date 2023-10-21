import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NetFlixSearchComponent.css'
import SearchItem from '../SearchItem/SearchItem'

function NetFlixSearchComponent({ items }) {
	
	return (
		<div className="search-container">
			<h2 className="search-container-heading">
				Search Results : {items?.length}
			</h2>
			<div className="search-list-container">
				{items?.map(item => (
					<SearchItem item={item} />
				))}
			</div>
		</div>
	)
}

export default NetFlixSearchComponent
