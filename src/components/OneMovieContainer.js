import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FetchContext } from '../FetchContext';

const OneMovieContainer = () => {
	const { fetchData, data, loading } = useContext(FetchContext);
	const baseUrl = `https://image.tmdb.org/t/p/original/`;
	useEffect(() => {
		fetchData('popular');
	}, []);
	let poster = '';
	let randomMovie = '';
	if (!loading) {
		const random = Math.floor(Math.random() * 19) + 1;
		randomMovie = data.results[random];
		poster = randomMovie.poster_path.split('/')[1];
	}
	console.log(randomMovie);
	const test = `${baseUrl}${poster}`;

	return (
		<>
			{!loading && (
				<OneMovieHolder>
					{/* <img src={`${baseUrl}${poster}`} alt='no image' /> */}
					<Poster background={test}></Poster>
				</OneMovieHolder>
			)}
		</>
	);
};
const OneMovieHolder = styled.div`
	width: 100vw;
	height: 100vh;
`;
// const Img = styled.img`
// 	object-fit: cover;
// `;

const Poster = styled.div`
	width: 100%;
	height: 100%;
	background-image: ${(props) => `url(${props.background}) `};
	background-size: 100% 100%;
	box-shadow: inset 0 0 50px 70px #000000ad;
`;
export default OneMovieContainer;
