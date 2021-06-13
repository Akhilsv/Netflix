import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from './Reuse/MovieCard';

const HorizontalContainer = ({ type, name,device }) => {
	const [movies, setMovies] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData(type, device);
	}, []);
	const baseUrl = `https://image.tmdb.org/t/p/original/`;

	const fetchData = async (type,device) => {
		const apiKey = `94dad5a9a7951ca6bce15cab74981a6a`;
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/${device}/${type}?api_key=${apiKey}&language=en-US&page=1`,
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(`${data.status_message} ${response.status}`);
			setMovies(data);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};


	return (
		<>
			{!loading && (
				<BigContainer>
					<TypeName>{name}</TypeName>
					<Container>
						{movies.results.map((movie) => {
							return (
								<MovieCard
									key={movie.id}
									mid={movie.id}
									img={movie.poster_path}
									details={movie}
								/>
							);
						})}
					</Container>
				</BigContainer>
			)}
		</>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;
const BigContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #000000e1;
	padding: 10px 10px 0px 10px;
`;
const TypeName = styled.h1`
	font-size: 1.3rem;
	font-weight: 600;
	color: white;
	font-family: 'Noto Sans HK', sans-serif;
	padding: 2px;
`;
export default HorizontalContainer;
