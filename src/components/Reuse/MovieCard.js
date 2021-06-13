import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import MovieDetails from './MovieDetails';

const MovieCard = ({ img, mid }) => {
	const history = useHistory();
	const baseUrl = `https://image.tmdb.org/t/p/original/`;

	const gotoDetailsHandler = () => {
		history.push(`/${mid}`)
	};
	const poster = `${baseUrl}${img}`;
	return (
		<>
			<Card src={poster} onClick={gotoDetailsHandler}></Card>
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
