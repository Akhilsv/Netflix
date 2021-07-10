import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FetchContext } from '../FetchContext';
import { LoadHolder, Loading } from './Reuse/Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OneMovieContainer = ({ type, device }) => {
	const { fetchData, data, loading } = useContext(FetchContext);
	const baseUrl = `https://image.tmdb.org/t/p/original/`;
	useEffect(() => {
		fetchData(type, device);
		// eslint-disable-next-line
		return () => {
			fetchData();
		};
	}, [type, device]);
	let poster = '';
	let randomMovie = '';
	let test = '';
	if (!loading) {
		console.log(data);
		const random = Math.floor(Math.random() * 19) + 1;
		randomMovie = data.results[random];
		if (randomMovie.backdrop_path !== null) {
			poster = randomMovie.backdrop_path.split('/')[1];
		} else {
			console.log('yeahhhhhhhhhh');
			poster = '/wr7nrzDrpGCEgYnw15jyAB59PtZ.jpg';
		}

		test = `${baseUrl}${poster}`;
	}

	return (
		<>
			{loading && (
				<LoadHolder>
					<Loading />
				</LoadHolder>
			)}
			{!loading && (
				<OneMovieHolder>
					<LazyLoadImage
						src={`${baseUrl}${poster}`}
						alt='no image'
						effect='blur'
					/>
				</OneMovieHolder>
			)}
		</>
	);
};
const OneMovieHolder = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	@media (max-width: 600px) {
		height: 70vh;
	}
	img {
		width: 100%;
		height: 100%;
	}
	box-shadow: inset 0 0 50px 70px #000000ad;
`;
// const Img = styled.img`
// 	object-fit: cover;
// `;


export default OneMovieContainer;
