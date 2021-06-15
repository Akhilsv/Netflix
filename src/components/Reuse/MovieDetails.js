import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
	const [movie, setMovie] = useState('');
	const [loading, setLoading] = useState(true);

	const params = useParams();

	useEffect(() => {
		fetchData(params.movieId, params.type);
	}, [params.movieId]);

	const fetchData = async (id, device) => {
		const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/${device}/${id}?api_key=${apiKey}&language=en-US&page=1`,
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(`${data.status_message} ${response.status}`);
			setMovie(data);
			console.log(data);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};
	let poster = '';
	if (!loading) {
		let img = movie.backdrop_path;
		const baseUrl = `https://image.tmdb.org/t/p/original/`;
		poster = `${baseUrl}${img}`;
	}

	return (
		<>
			{!loading && (
				<DetailsHolder>
					<ImgContainer background={poster}>
						<Title>{movie.title}</Title>
					</ImgContainer>
					<DetailsContainer></DetailsContainer>
				</DetailsHolder>
			)}
		</>
	);
};

const DetailsHolder = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	background-color: #000000;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ImgContainer = styled.div`
	margin-top: 90px;
	min-width: 100%;
	height: 300px;
	background-image: ${(props) => `url(${props.background}) `};
	background-size: 100% 100%;
	@media (max-width: 600px) {
		margin-top: 0px;
	}
`;
const Title = styled.h1`
	font-family: 'Noto Sans HK', sans-serif;
	opacity: 1;
	position: absolute;
	top: 25%;
	left: 10%;
	color: #ebebeb;
	font-size: 1.3rem;
`;
const DetailsContainer = styled.div``;
export default MovieDetails;
