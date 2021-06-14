import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MovieCard = ({ img, mid }) => {
	const history = useHistory();
	const baseUrl = `https://image.tmdb.org/t/p/original/`;
	const poster = `${baseUrl}${img}`;
	const gotoDetailsHandler = () => {
		history.push(`/${mid}`);
	};

	return (
		<>
			<Card src={poster} onClick={gotoDetailsHandler}></Card>
		</>
	);
};
const Card = styled.img`
	min-width: 300px;
	height: 300px;
	margin: 10px;
	transition: all 0.5s;
	border-radius: 10px;
	filter: grayscale(0.5);
	@media (max-width: 600px) {
		min-width: 150px;
		height: 200px;
	
	}
	&:hover {
		transform: scale(1.05);
		filter: grayscale(0);
	}
`;
export default MovieCard;
