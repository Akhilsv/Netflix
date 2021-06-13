import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
	const [movies, setMovies] = useState('');
	const [loading, setLoading] = useState(true);

	const params = useParams();
	console.log();
	useEffect(() => {
		fetchData(params.movieId);
	}, []);
	const fetchData = async (id) => {
		const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`,
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
	return (
		<>
            <DetailsHolder>
                
            </DetailsHolder>
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
`;
export default MovieDetails;
