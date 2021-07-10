import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MovieCard = ({ img, mid, device }) => {
	const history = useHistory();
	const baseUrl = `https://image.tmdb.org/t/p/original/`;
	const poster = `${baseUrl}${img}`;
	const gotoDetailsHandler = () => {
		history.push(`/${device}/${mid}`);
	};

	return (
		<>
			<Card
				effect="blur"
				src={poster}
				onError={(e) => {
					e.target.src = '/error.jpg';
				}}
				onClick={gotoDetailsHandler}></Card>
		</>
	);
};
const Card = styled(LazyLoadImage)`
	width: 300px;
	height: 300px;
	margin: 10px;
	transition: all 1s ease-in-out;
	border-radius: 10px;
	filter: grayscale(0.5);
	@media (max-width: 600px) {
		width: 150px;
		height: 200px;
	}
	&:hover {
		transform: scale(1.05);
		filter: grayscale(0);
	}
`;
export default MovieCard;
