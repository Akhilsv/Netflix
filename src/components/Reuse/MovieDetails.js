import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LoadHolder, Loading } from './Loading';
import Cast from './Cast';

const MovieDetails = ({ framer, transition }) => {
	const [movie, setMovie] = useState('');
	const [cast, setCast] = useState();
	const [loading, setLoading] = useState(true);
	const [toggle, setToggle] = useState('Cast');

	const params = useParams();
	const toggleTab = (e) => {
		setToggle(e.target.innerHTML);
	};

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
			
		} catch (e) {
			console.log(e);
		}
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/${device}/${id}/credits?api_key=${apiKey}`,
			);
			const data = await response.json();
			if (!response.ok)
				throw new Error(`${data.status_message} ${response.status}`);
			setCast(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	let poster = '';
	if (!loading) {
		let img = movie.backdrop_path || movie.poster_path;
		const baseUrl = `https://image.tmdb.org/t/p/original/`;
		poster = `${baseUrl}${img}`;
	}

	return (
		<>
			{loading && (
				<LoadHolder>
					<Loading />
				</LoadHolder>
			)}
			{!loading && (
				<MovieDetailsContainer
					as={motion.div}
					initial='initial'
					animate='in'
					exit='out'
					variants={framer}
					transition={transition}>
					<ImgContainer background={poster}></ImgContainer>
					<DetailsContainer>
						<Header>
							<Title>{movie.title || movie.original_name}</Title>
							<SymbolsHolder>
								<h1>⭐{movie.vote_average}</h1>
								<h1>📅{movie.release_date || movie.last_air_date}</h1>
								<h1>❓{movie.status}</h1>
							</SymbolsHolder>
						</Header>
						<SwitchChannel>
							<Button
								onClick={toggleTab}
								className={toggle === 'Overview' && 'active'}>
								Overview
							</Button>
							<Button
								onClick={toggleTab}
								className={toggle === 'Cast' && 'active'}>
								Cast
							</Button>
						</SwitchChannel>

						<ChannelDetails>
							{toggle === 'Overview' && <p>{movie.overview}</p>}
							{toggle === 'Cast' && <Cast data={cast} />}
						</ChannelDetails>
					</DetailsContainer>
				</MovieDetailsContainer>
			)}
		</>
	);
};

const MovieDetailsContainer = styled(motion.div)`
	max-width: 100vw;
	min-height: 97vh;
	margin-top: 20px;
	background-color: #000000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 900px) {
		margin-top: 0;
		height: 100%;
		justify-content: flex-start;
		flex-direction: column;
		padding-bottom: 50px;
	}
`;
const ImgContainer = styled.div`
	width: 45%;
	height: 85vh;
	background-image: ${(props) => `url(${props.background}) `};
	background-size: 100% 100%;
	@media (max-width: 900px) {
		width: 100vw;
		height: 30vh;
	}
`;
const DetailsContainer = styled.div`
	width: 52%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 900px) {
		min-height: 50vh;
		width: 100%;
		justify-content: space-around;
	}
`;

const Header = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 30vh;
	@media (max-width: 900px) {
		width: 100%;
		height: 20%;
		padding-left: 20px;
	}
`;
const Title = styled.h1`
	font-family: 'Noto Sans HK', sans-serif;
	color: #ebebeb;
	font-size: 1.5rem;
	@media (max-width: 400px) {
		font-size: 1.2rem;
	}
`;

const SymbolsHolder = styled.div`
	display: flex;
	padding-right: 30px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	& h1 {
		font-size: 1.4rem;
		color: white;
		@media (max-width: 500px) {
			font-weight: 500;
			font-size: 1rem;
		}
	}
`;
const Body = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	min-height: 40%;
	width: 90%;
	margin: auto;
	@media (max-width: 900px) {
		width: 100%;
	}
`;
const SwitchChannel = styled.div`
	height: 10%;
	width: 80%;
	color: white;
	display: flex;
	align-items: center;
	font-family: 'Noto Sans HK', sans-serif;
	justify-content: space-evenly;
`;
const Button = styled.h1`
	transition: all 0.5s;
	text-align: center;
	width: 30%;
	height: 100%;
	font-size: 1.5rem;
	border-bottom: 3px solid black;
	@media (max-width: 900px) {
		height: 70%;
		font-weight: 600;
		font-size: 1rem;
	}
	&.active {
		transition: all 0.5s;
		border-bottom: 3px solid #c28400;
		border-radius: 5px;
	}
	&:hover {
	}
`;
const ChannelDetails = styled.div`
	margin-top: 30px;
	width: 70%;
	height: 50%;
	font-size: 1.2rem;
	letter-spacing: 1px;

	overflow-y: scroll;
	& p {
		color: #f7f4f4ef;
		@media (max-width: 900px) {
			font-size: 1rem;
		}
	}
	@media (max-width: 900px) {
		margin-top: 0;
		width: 80%;
	}
	&::-webkit-scrollbar {
		display: none;
	}
`;
export default MovieDetails;
