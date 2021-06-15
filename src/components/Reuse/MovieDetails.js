import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
	const [movies, setMovies] = useState('');
	const [loading, setLoading] = useState(true);

	const params = useParams();
	console.log(params);
	useEffect(() => {
		fetchData(params.movieId,params.type);
	}, [params.movieId]);

	const fetchData = async (id,device) => {
		const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/${device}/${id}?api_key=${apiKey}&language=en-US&page=1`,
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(`${data.status_message} ${response.status}`);
			setMovies(data);
			console.log(data);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};
	let poster = '';
	if (!loading) {
		let img = movies.backdrop_path;
		const baseUrl = `https://image.tmdb.org/t/p/original/`;
		poster = `${baseUrl}${img}`;
	}

	return (
		<>
			{!loading && (
				<DetailsHolder>
					<ImgContainer src={poster} alt={'no'} />
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
const ImgContainer = styled.img`
	margin-top: 90px;
	min-width: 90%;
	height: 300px;
	@media (max-width: 600px) {
		margin-top: 0px;
	}
`;
export default MovieDetails;
