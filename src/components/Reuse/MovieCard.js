import React from 'react';
import styled from 'styled-components';

const MovieCard = ({ img }) => {
	const baseUrl = `https://image.tmdb.org/t/p/original/`;

	const poster = `${baseUrl}${img}`;
	return (
		<>
			<Card src={poster}></Card>
		</>
	);
};
const Card = styled.img`
	min-width: 300px;
	height: 200px;
	margin: 10px;
	transition: all 0.5s;
	border-radius: 10px;
	filter: grayscale(0.5);
	

	@media (max-width: 600px) {
		min-width: 150px;
		height: 200px;
		margin: 1px 2px;
	}
	&:hover {
		transform: scale(1.05);
		filter: grayscale(0);
	}
`;
export default MovieCard;
